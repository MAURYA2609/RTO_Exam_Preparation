import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  public category:string;
  public correct:string;

  questionForm:FormGroup = new FormGroup({
    question:new FormControl(null,Validators.required),
    optionA:new FormControl(null,Validators.required),
    optionB:new FormControl(null,Validators.required),
    optionC:new FormControl(null,Validators.required),
    optionD:new FormControl(null,Validators.required)
  })

  constructor(
    private _router: Router, 
    private _questionService: QuestionService,
    private cookieservice:CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") != 'user10702'){
      this._router.navigate(["/index"]);
    }

  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }

  addQuestion(){
    console.log(this.questionForm.value);
    this._questionService.addQuestion(JSON.stringify(this.questionForm.value),this.correct)
      .subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/adminHome']);
        },
        error => { console.error(error) }
      )
      this._router.navigate(['/adminHome']);
  }
}