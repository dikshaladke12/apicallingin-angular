import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../model/interface/user';
import { response } from 'express';
@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.css'
})
export class AllUserComponent implements OnInit {
  UserData :User[]=[];
  data :any;
  id= '6745621d0e7ff9f51d0481e5';
  constructor(private ApiService:ApiService){
  }
  ngOnInit(){
    this.ApiService.getdetails().subscribe(response=>{
      this.UserData= response.userData
    })
  }
  view(){
    this.ApiService.getdetailByID(this.id).subscribe(response=>{
      
      this.data = response.userData
      console.log(this.data)
    })
  }
}
