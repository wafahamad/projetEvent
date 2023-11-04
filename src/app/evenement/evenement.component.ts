import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../LesClasses/event';
import { EvenementService } from '../lesService/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  event!:Event;
  id!:number;
  constructor(private activatedRoute:ActivatedRoute,private ev:EvenementService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];

    this.ev.getEvenementById(this.id).subscribe(data =>this.event=data);
  }

  getMoreInfo(id:number){
    
      this.route.navigate(['/dashboard/participation',id]);
  }

}
