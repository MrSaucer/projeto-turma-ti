import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username?: string;
  password?: string;
  

  constructor(private router: Router) { }

  redirectToLoader(){
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/loader']);
      
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
        alert('User successfully logged in.');
      }, 2000);
    } else {
      alert('Incorrect username or password.');
    }
  }
}
