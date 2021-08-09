import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { User, UserSecondService } from '../../services/user-second.service';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  userAPI: User = {UserName: '', Password: ''};
  success: boolean = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public http2: UserSecondService
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userAPI.UserName = this.signup.username;
      this.userAPI.Password = this.signup.password;

      this.http2.registerUser(this.userAPI).subscribe(data => {this.success = data

        if(this.success == true)
        {
          this.userData.signup(this.signup.username);
          this.router.navigateByUrl('/app/tabs/schedule');
        }
      })      
    }
  }
}
