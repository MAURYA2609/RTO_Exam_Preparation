import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  

  constructor(private _router: Router,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null' ){
      this._router.navigate(["/index"]);
    }
}
  logout() {
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
}
