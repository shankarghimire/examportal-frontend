import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(){
    //alert("submitted!");
    if(this.user.userName === '' || this.user.userName == null){
      alert('Username is required!');
      return;
    }
    console.log(this.user);
  }
}
