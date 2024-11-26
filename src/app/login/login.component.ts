import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email ='';
  password ='';
  returnUrl ='/dashboard'

  constructor(
    private ApiService: ApiService,
    private router: Router){
  }

  login(){
    const user = {email: this.email,password: this.password}
    this.ApiService.login(user)
    .subscribe((res: any) => {
      const user = JSON.stringify(res);
      console.log(user)
      localStorage.setItem('userdata', user);
      alert('login successfull');
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
