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
  LoginDetails: string = 'default'

  constructor(private userService: UserService, private router : Router,){}
  
  loginForm: FormGroup|any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        // console.log(val.url);
        if(localStorage.getItem('setUserData') && val.url.includes('user')){
          // console.log('this is login area');
          this.LoginDetails = 'user'
        }else{
          // console.log('this is outside login area');
          this.LoginDetails = 'default'
        }
      }
    })  
  }
  loginUser(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      const loginData = this.loginForm.value;
      this.userService.loginUser(loginData).subscribe({
        next:(response)=>{
          console.log('user registered successfully',response);
          const token = response.Data[0].token
          localStorage.setItem('setUserData',JSON.stringify({Email: this.loginForm.value.email, 
          Password: this.loginForm.value.password,
          token: token
        }))
        this.router.navigate(['/user']);
        },
        error:(error)=>{
          console.log('error registering user',error)
        }
      })
    }
  }


}
