import { Component } from '@angular/core';
import { Paricipant } from 'src/app/LesClasses/paricipant';
import { Observable } from "rxjs";
import { ParticipantService } from 'src/app/lesService/participant.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {

  participants!: Observable<Paricipant[]>;

  constructor (private parService:ParticipantService,private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.participants = this.parService.getParticipants();
  }

  deleteParticipant(id:number) {

    this.parService.deleteParticipant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
