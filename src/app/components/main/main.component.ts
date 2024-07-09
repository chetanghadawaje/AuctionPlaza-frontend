import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SignupComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
