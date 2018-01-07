import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:boolean = true;
  user: FormGroup;
  constructor(private fb: FormBuilder , private auth :AuthService , private router:Router) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['',  Validators.required]
    })
  }

  signIn(){ 
    const username = this.user.get('username').value;
    const password =this.user.get('password').value;
    this.auth.userSignIn(username,password).then(
      msg=>{  
        this.router.navigate(['/home']);
      }
    );
  }

  signUp(){
    const username = this.user.get('username').value;
    const password =this.user.get('password').value;
    this.auth.userSignUp(username,password).then(
      msg=>{
        this.login = true;
      }
    );
  }

  toggle(){
   
    this.login = (this.login == true) ? false : true;
   
  }

}
