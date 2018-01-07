import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {

  constructor(private firebaseAuth : AngularFireAuth) { }

  userSignUp(username,password){   
   return this.firebaseAuth.auth.createUserWithEmailAndPassword(username,password);
  } 

  userSignIn(username,password){
   return this.firebaseAuth.auth.signInWithEmailAndPassword(username,password)
  }
  
  authStateObservable(): any {
    return this.firebaseAuth.authState;
  }

  currentUser(){
    return this.firebaseAuth.auth.currentUser;
  }

  signOut(){
    return this.firebaseAuth.auth.signOut();
  }
}
