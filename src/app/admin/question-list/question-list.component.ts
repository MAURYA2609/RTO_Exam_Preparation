import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public ALLquestions: any=[];

  constructor(private _router: Router,
    private _questionService: QuestionService,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    
    console.log(this.cookieservice.get("username"));
    if(this.cookieservice.get("username") == 'null' ){
      console.log("the value is null");
      this._router.navigate(["/index"]);
    }
  

    this._questionService.questionList()
    .subscribe(
      data=>{
        console.log(data['ALLquestions']);
        this.ALLquestions=data['ALLquestions']}     
    )
    
  }


  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
  
}