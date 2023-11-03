import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParService } from '../lesService/login-par.service';

@Component({
  selector: 'app-login-participant',
  templateUrl: './login-participant.component.html',
  styleUrls: ['./login-participant.component.css']
})
export class LoginParticipantComponent {

  loginForm!:FormGroup;
  constructor(private fb : FormBuilder, private loginService :LoginParService,){}

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      id:['', Validators.required],
      prenom:['', Validators.required],
      nom:['',Validators.required],
      e_mail:['',Validators.required],
      pwd:['',Validators.required]
    })
  }
}
