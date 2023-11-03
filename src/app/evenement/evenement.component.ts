import { Component, Input } from '@angular/core';
import { Event } from '../LesClasses/event';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {
@Input() event!:Event;
  events!:Event[];

}
