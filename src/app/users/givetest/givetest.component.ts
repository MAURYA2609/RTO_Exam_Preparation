import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-givetest',
  templateUrl: './givetest.component.html',
  styleUrls: ['./givetest.component.css']
})
export class GivetestComponent implements OnInit {



  public questions: any = [];
  public answers: any = [];
  public score: number = 0;
  public avail: boolean = false;
  queNo: number = null;
  sec: number = null;
  temp: string = null;
  downloadTimer : any;
  check: boolean = false;
  correct : number;

  constructor(private _router: Router,
    private route: ActivatedRoute,
    private _questionService: QuestionService,
    private cookieservice: CookieService) { }

  ngOnInit() {
    if (this.cookieservice.get("username") == 'null') {
      this._router.navigate(["/index"]);
    }

    this._questionService.testQuestions().subscribe(
      data => {
        this.questions = data["quizquestions"]

        console.log(document.readyState);
        this.correct = 0;
        localStorage.setItem("qNo", 0 + "");
        this.startTest();
      }
    );
  }

  logout() {
    this.cookieservice.set("username", null);
    this._router.navigate(['/index']);
  }


  setScore() {
    this._questionService.addScore(this.cookieservice.get("username"), this.score)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      )
  }

  startTest() {
    this.queNo = 0;
    this.timer();
  }



  timer() {
    var timeleft = 0;
    var i = parseInt(localStorage.getItem("qNo"))-1;

    var array = this.questions;

    // var func = this.endTest;

    console.log(array);
    this.downloadTimer = setInterval(function () {
      
      if (timeleft <= 0) {
        timeleft = 45;
        console.log(document.readyState);
        i++;

        localStorage.removeItem("qNo");
        localStorage.setItem("qNo", i + "");

        if(i==15)
        {
          return;
        }
        
        console.log(array[i].ans);

        document.getElementById("questionNo").innerHTML = array[i].que;
        document.getElementById("op1").innerHTML = array[i].op1;
        document.getElementById("op2").innerHTML = array[i].op2;
        document.getElementById("op3").innerHTML = array[i].op3;
        (<HTMLInputElement>document.getElementById("o1")).checked = false;
        (<HTMLInputElement>document.getElementById("o2")).checked = false;
        (<HTMLInputElement>document.getElementById("o3")).checked = false;
        this.check = array[i].hasImg;
        if (this.check)
        {
          document.getElementById("qi").setAttribute("src", "../../../assets/QueImg/" + array[i].imgurl);
        }
        else{
          document.getElementById("qi").setAttribute("src",array[i].imgurl);
        }
      } else {
        document.getElementById("countdown").innerHTML = "Time left : " + timeleft;
      }
      timeleft -= 1;
    }, 1000);
  
  }

  checkAnswer(){
    var qn = Number(localStorage.getItem("qNo"));
    if((<HTMLInputElement>document.getElementById("o1")).checked && this.questions[qn].ans == 1)
      this.correct++;

    if((<HTMLInputElement>document.getElementById("o2")).checked && this.questions[qn].ans == 2)
    this.correct++;

    if((<HTMLInputElement>document.getElementById("o3")).checked && this.questions[qn].ans == 0)
    this.correct++;

    if(qn == 14)
    {
      clearInterval(this.downloadTimer);
      this.endTest();
    }
      
      console.log(qn);
      localStorage.removeItem("qNo");
      localStorage.setItem("qNo", qn+1 + "");
      clearInterval(this.downloadTimer);
      this.timer();

      document.getElementById("ans").innerHTML = "You have scored : " + this.correct;
  }

  endTest()
  {
    document.getElementById("countdown").hidden = true;
    document.getElementById("questionDiv").hidden = true;
    this.setScore();
  }
}