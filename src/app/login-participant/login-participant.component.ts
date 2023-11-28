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
  constructor(private fb : FormBuilder, private loginService :LoginParService,private router: Router,){}

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      e_mail:[
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"'),
      ],
      pwd:['',Validators.required]
    })
  }

  public get email() {
    return this.loginForm.get(' e_mail');
  }
  public get password() {
    return this.loginForm.get('pwd');
  }
  errorMessage: string = '';
  onSubmit() {
    if (this.email !== null && this.password !== null) {
      const userEmail = this.email.value;
      const passwordEmail = this.password.value;
      this.loginService.authenticate(userEmail, passwordEmail).subscribe(
        (response) => {
          if (response.token) {
          localStorage.setItem('token', response.token);
          const id = ''; // Replace '123' with the actual user ID
          this.loginService.authenticatedRequest(`participation/${id}`).subscribe(
            () => {
              // Logic after successful authenticated request (if needed)
              this.router.navigate(['/participation', id]); // Redirect to participation
            },
            (error) => {
              // Handle error if the authenticated request fails
              console.error('Error in authenticated request:', error);
            }
          );
        } else {
          this.errorMessage = 'Invalid response from server';
        }
        (error) => {
          alert("Invalid username or password")
        }
      }
      );
    }
  }
}
