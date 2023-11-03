import { Component } from '@angular/core';
import { EvenementService } from '../lesService/evenement.service';
import { Event } from '../LesClasses/event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events!:Event[];
  constructor (private evn : EvenementService){};

  ngOnInit(): void {
    this.evn.getEvenements().subscribe((data) =>(this.events=data));
  }

}
