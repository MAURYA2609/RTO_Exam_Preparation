import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { QuestionService } from 'src/app/question.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-givetest',
  templateUrl: './givetest.component.html',
  styleUrls: ['./givetest.component.css']
})
export class GivetestComponent implements OnInit {

  

  public questions : any=[];
  public answers : any=[];
  public score : number=0;
  public avail : boolean =false;

  constructor(private _router: Router,
    private route:ActivatedRoute,
    private _questionService: QuestionService,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null' ){
      this._router.navigate(["/index"]);
    }

   

    this._questionService.testQuestions()
    .subscribe(
      data=>{this.questions=data['quizquestions']}
    )
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
  

  getScore(){
    this.score=0;
    for(let i=0;i<this.questions.length;i++)
    {
      if(this.answers[i]==this.questions[i].correct)
      {
        this.score=this.score+1;
      }
    }
    console.log(this.score);
    this.avail=true;

    this._questionService.addScore(this.cookieservice.get("username"),this.score)
    .subscribe(
      data => console.log(data) ,
      error => console.error(error)
    )

  }
}
