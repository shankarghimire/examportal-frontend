import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public user={
  userName: '',
  password: '',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
};

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    //alert("submitted!");
    if(this.user.userName === '' || this.user.userName == null){
      alert('Username is required!');
      return;
    }

    //calls addUser() method from userservice
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //for success
        console.log(data);
        alert("Registration successful!");
      },
      (error)=>{
        //for Error
        console.log(error);
        alert("Something went wrong!");
      }
    );

  }
}
