import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../model/interface/user';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.css'
})
export class AllUserComponent implements OnInit {
  UserData :User[]=[];
  data ?:User;

  constructor(private ApiService:ApiService){
  }

  ngOnInit(): void {
    this.fetchAlluser()
  }

  fetchAlluser(){
    this.ApiService.getdetails().subscribe(response=>{
      this.UserData= response.userData
    })
  }

  view(id: String): void{
    this.ApiService.getdetailByID(id).subscribe({
      next: (response: any)=>{
        console.log(this.data)
        this.data = response.userData
      },
      error: (err)=>{
        console.error(`Error fetching user with ID ${id}`,err)
      }
    })    
  }
  
  deleteUser(id: String){
    this.ApiService.deleteUser(id).subscribe( (response) => {
      alert('User deleted successfully');
      this.fetchAlluser(); 
    },
    (error) => {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    })
  }
}
