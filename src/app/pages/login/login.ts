import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { User, UserSecondService } from '../../services/user-second.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  userAPI: User = {UserName: '', Password: ''};
  success: boolean = false;
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public http2: UserSecondService
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userAPI.UserName = this.login.username;
      this.userAPI.Password = this.login.password;
      this.http2.loginUser(this.userAPI).subscribe(data => {this.success = data

      if(this.success == true)
      {
        this.userData.login(this.login.username);
        this.router.navigateByUrl('/app/tabs/schedule');
      }
    })
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
