import { Component } from '@angular/core';
import {EvenementService } from "./lesServices/evenementService";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(private router: Router, private evenementService: EvenementService) {}
  ngOnInit(): void {
    this.par.getParticipants().subscribe(
      data => this.AllParticipant = data
    )
    this.createForm();

  }
createForm()
{
  this.loginForm = this.fb.nonNullable.group({
    id : [],
    e_mail : ['',Validators.required],
    pwd : ['',Validators.required],
    nom:['',Validators.required],
    cin:[,Validators.required],
    age:[,Validators.required],
    prenom:['',Validators.required]}
  )
}
  addEvent(): void {
    // Implement logic to add an event
    this.evenementService.addEvent(this.newEvent).subscribe(() => {
      // Navigate to the event list page after adding the event
      this.router.navigate(['/events']);
    }, (error) => {
      console.error('Error adding event:', error);
      // Handle error (e.g., show error message)
    });
  }
}
