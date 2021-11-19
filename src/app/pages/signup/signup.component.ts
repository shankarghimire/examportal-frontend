import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';


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

  constructor(private userService:UserService,
     private _snackBar: MatSnackBar) {

      }

  ngOnInit(): void {
  }

  formSubmit(){
    //alert("submitted!");
    if(this.user.userName === '' || this.user.userName == null){
      //alert('Username is required!');
      this._snackBar.open('Username is required!','',{
        duration:3000,
        verticalPosition:'top',
      });
      return;
    }

    //calls addUser() method from userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //for success
        console.log(data);
        //alert("Registration successful!");
        Swal.fire('Success','User id is ' + data.id,'success');
      },
      (error)=>{
        //for Error
        console.log(error);
        //alert("Something went wrong!");
        this._snackBar.open('Something went wrong!!!','',{
          duration:3000,

        });
      }
    );

  }
}
