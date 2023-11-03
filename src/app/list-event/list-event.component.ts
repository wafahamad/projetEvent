import { Component } from '@angular/core';
import { EvenementService } from '../lesService/evenement.service';
import { Event } from '../LesClasses/event';
@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  events!:Event[];
  constructor (private evn : EvenementService){};

  ngOnInit(): void {
    this.evn.getEvenements().subscribe((data) =>(this.events=data));
  }
}
