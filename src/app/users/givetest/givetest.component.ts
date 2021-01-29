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
  check: boolean = false;
  // interval: NodeJS.Timeout;

  constructor(private _router: Router,
    private route: ActivatedRoute,
    private _questionService: QuestionService,
    public cookieservice: CookieService) { }

  ngOnInit() {
    if (this.cookieservice.get("username") == 'null') {
      this._router.navigate(["/index"]);
    }

    this._questionService.testQuestions().subscribe(
      data => {
        this.questions = data["quizquestions"]

        // while(document.readyState != "complete"); 
        console.log(document.readyState);
        this.startTest();
        // console.log(data);
        // console.log(this.questions);
      }
    );

    // console.log(this.questions);


  }

  logout() {
    this.cookieservice.set("username", null);
    this._router.navigate(['/index']);
  }


  getScore() {
    this.score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].ans == 0) {
        this.temp = this.questions[i].op1;
      }
      else if (this.questions[i].ans == 1) {
        this.temp = this.questions[i].op2;
      }
      else {
        this.temp = this.questions[i].op3;
      }

      if (this.answers[i] == this.temp) {
        this.score = this.score + 1;
      }
    }
    console.log(this.score);
    this.avail = true;

    this._questionService.addScore(this.cookieservice.get("username"), this.score)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      )
  }

  startTest() {
    this.queNo = 0;

    // var array = this.questions;

    // document.getElementById("questionNo").innerHTML = this.questions[this.queNo].que;
    // console.log(this.questions);
    // console.log("hjhjds");
    // document.getElementById("op1").innerHTML = this.questions[this.queNo].op1;
    // document.getElementById("op2").innerHTML = this.questions[this.queNo].op2;
    // document.getElementById("op3").innerHTML = this.questions[this.queNo].op3;
    // this.check = this.questions[this.queNo].hasImg;
    // if (this.check)
    //   (<HTMLImageElement>document.getElementById("qi")).src = "../../../assets/QueImg/" + this.questions[this.queNo].imgurl;

    this.timer();
  }

  timer() {
    var timeleft = 0;
    var i = -1;

    var array = this.questions;

    console.log(array);
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        timeleft = 5;
        console.log(document.readyState);
        i++;
        this.queNo = i;
        console.log(i);
        console.log(this.queNo);

        // console.log(this.questions);
        document.getElementById("questionNo").innerHTML = array[i].que;
        document.getElementById("op1").innerHTML = array[i].op1;
        document.getElementById("op2").innerHTML = array[i].op2;
        document.getElementById("op3").innerHTML = array[i].op3;
        this.check = array[i].hasImg;
        console.log(this.check);
        console.log(document.getElementById("op1"));
        if (this.check)
        {
          // (<HTMLImageElement>document.getElementById("qi")).src = "../../../assets/QueImg/" + array[i].imgurl;
          document.getElementById("qi").setAttribute("src", "../../../assets/QueImg/" + array[i].imgurl);
        }
        else{
          document.getElementById("qi").setAttribute("src",array[i].imgurl);
        }

        console.log(array[i]);

        console.log(i);
      } else {
        document.getElementById("countdown").innerHTML = "Time left : " + timeleft;
      }
      timeleft -= 1;
    }, 1000);
  }
}