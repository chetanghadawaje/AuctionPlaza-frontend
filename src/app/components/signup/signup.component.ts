import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private userService : UserService){}
  
  signUpForm : FormGroup | any;

  ngOnInit(): void {
  this.signUpForm = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/)
      ]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {validators: this.passwordMatchValidator})
}
  onSignUp(){
    console.log(this.signUpForm.value);
    if(this.signUpForm.valid){
      const formData = this.signUpForm.value;
      this.userService.onSignUp(formData).subscribe({
        next:(response)=>{
          console.log('user registered successfully',response)
        },
        error:(error)=>{
          console.log('error registering user',error)
        }
      })
      this.signUpForm.reset()
    }
  }
  passwordMatchValidator(control:AbstractControl){
    return control.get('password')?.value == control.get('confirmPassword')?.value ? null : {passwordMissMatch: true}
  }
}
