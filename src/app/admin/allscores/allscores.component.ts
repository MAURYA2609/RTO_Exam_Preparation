import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-allscores',
  templateUrl: './allscores.component.html',
  styleUrls: ['./allscores.component.css']
})
export class AllscoresComponent implements OnInit {

  public scores:any=[];

  constructor(private _router: Router,
    public cookieservice: CookieService,
    public _questionService : QuestionService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null'){
      this._router.navigate(["/index"]);
    }

    this._questionService.allScores()
    .subscribe(
      data=>{this.scores=data['allScores']}
    )
  }
  

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
    
}
