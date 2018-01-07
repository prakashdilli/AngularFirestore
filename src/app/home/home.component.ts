import { Component, OnInit } from '@angular/core';
import { AuthService }from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser:string;

  constructor(private auth : AuthService, private route:Router) { }

  ngOnInit() {
   this.loggedInUser = this.auth.currentUser().email;
  }

  signOut(){
    this.auth.signOut();
    this.route.navigate(['']);
  }

}
