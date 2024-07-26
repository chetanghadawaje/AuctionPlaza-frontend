import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userName : string = '';
  DisplayUserName : any;
  LoginDetails: string = 'default'

  constructor(private userService: UserService, private router : Router,){}
  
  loginForm: FormGroup|any;
  UserName: any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        // console.log(val.url);
        if(localStorage.getItem('email') && val.url.includes('user')){
          this.LoginDetails = 'user'
        }else{
          this.LoginDetails = 'default'
        }
      } 
    })  
    this.DisplayUserName = localStorage.getItem('email')
  }

  loginUser(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      const loginData = this.loginForm.value;
     this.userService.loginUser(loginData).subscribe({
        next:(response)=>{
          console.log('user registered successfully',response);
          this.loginForm.reset();
          const token = response.Data[0].token
          console.log('=>', loginData['email']);
          localStorage.setItem('email',loginData['email']);
        this.router.navigate(['/user']);
        },
        error:(error)=>{
          console.log('error registering user',error)
        }
      }) 
    }
  }
}
