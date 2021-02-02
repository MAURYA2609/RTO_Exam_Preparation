import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient, private _router: Router) { }
  addQuestion(body: any, correctAns : any) {
    return this.http.post('http://127.0.0.1:4000/questions/addQuestion/'+correctAns, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  questionList() {
    return this.http.post('http://127.0.0.1:4000/questions/questionList',  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }
  
  testQuestions() {
    return this.http.post('http://127.0.0.1:4000/questions/testQuestions',  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  addScore(username:string,score:number){
    return this.http.post('http://127.0.0.1:4000/scores/newScore/'+username+'/'+score ,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  getMyScores(username:string){
    return this.http.post('http://127.0.0.1:4000/scores/myScores/'+username,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  allScores() {
    return this.http.post('http://127.0.0.1:4000/scores/allScores',  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

}
