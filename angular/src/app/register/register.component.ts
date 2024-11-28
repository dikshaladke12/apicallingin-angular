import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = "";

  returnUrl = '/'
  constructor(private ApiService: ApiService, private router: Router) { }

  register() {
    this.ApiService.register(
      {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .subscribe({
        error: ()=>{
          alert("registration failed")
        },
        complete: ()=>{ 
          alert("registration successfull");
          this.router.navigateByUrl(this.returnUrl);
        }
      })
  }
}
