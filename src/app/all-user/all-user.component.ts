import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api.service';
import { User } from '../model/interface/user';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.css'
})

export class AllUserComponent implements OnInit {
  UserData: User[] = [];
  data?: User;

  oldPassword = ""
  newPassword = ""
  confirmPassword = ""

  constructor(private ApiService: ApiService) {
  }

  ngOnInit(): void {
    this.fetchAlluser()
  }

  fetchAlluser() {
    this.ApiService.getdetails().subscribe((response: any) => {
      this.UserData = response.userData
    })
  }

  view(id: string): void {
    this.ApiService.getdetailByID(id).subscribe({
      next: (response: any) => {
        this.data = response.userData
      },
      error: (err: any) => {
        console.error(`Error fetching user with ID ${id}`, err)
      }
    })
  }

  deleteUser(id: string) {
    this.ApiService.deleteUser(id).subscribe((response: any) => {
      alert('User deleted successfully');
      this.fetchAlluser();
    },
      (error: any) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user. Please try again.');
      })
  }

  changePassword() {
    const passwordDetails = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    }
    this.ApiService.changePassword(passwordDetails).subscribe(
      (response: any) => {
        alert("password changed ")
      }
    )
  }

  updateUser(id: string, updateData: {name?:string; email?:string;password?:string}){
    this.ApiService.updateUser(id,updateData).subscribe({
      next:(response:any)=>{
        alert("user updated successfully")
        this.fetchAlluser()
      },
      error: (err: any)=>{
        alert("failed")
      }
    })
  }

  clearUser(): void {
    this.data = undefined;
  }
}
