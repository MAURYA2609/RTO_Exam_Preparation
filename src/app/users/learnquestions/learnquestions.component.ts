import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-learnquestions',
  templateUrl: './learnquestions.component.html',
  styleUrls: ['./learnquestions.component.css']
})
export class LearnquestionsComponent implements OnInit {

  public ALLquestions: any = [];

  constructor(
    private _router: Router,
    private _questionService: QuestionService,
    private cookieservice: CookieService) {
    
   }

  ngOnInit() {
    if (this.cookieservice.get("username") == 'null') {
      this._router.navigate(["/index"]);
    }

    this._questionService.questionList().subscribe(
      data => {
        this.ALLquestions = data["ALLquestions"]
        console.log(this.ALLquestions);
      }
    );
  }

  logout() {
    this.cookieservice.set("username", null);
    this._router.navigate(['/index']);
  }

}