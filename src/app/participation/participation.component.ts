import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paricipant } from '../LesClasses/paricipant';
import { Event } from '../LesClasses/event';
import { Participation } from '../LesClasses/participation';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipationService } from '../lesService/participation.service';
import { EvenementService } from '../lesService/evenement.service';
import { LoginParService } from '../lesService/login-par.service';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
   
  idE!:number;
  data:any;
  ParForm !:FormGroup
  AllParticipant:Paricipant[]=[];
  CurrentParticipant:Paricipant[]=[];
  CurrentEvent:Event[]=[];
  partById!:Paricipant;
  eventById!:Event;
  idAuth!:number;
  participations:Participation[]=[];
  constructor(private activatedRoute:ActivatedRoute,private ps:ParticipationService,private router : Router,private fb:FormBuilder,private ev:EvenementService,private l:LoginParService) { }

  
  ngOnInit(): void {
    this.idE= this.activatedRoute.snapshot.params['id_event'];
    this.getEvent();

    this.idAuth = Number(localStorage.getItem("user-id"));
    this.ev.getParticipantById(Number(this.idAuth)).subscribe((data: Paricipant) => {
      this.partById = data;
      console.log(this.partById); 
    });    //participant de l'id récuper apres authotification


  this.ev.getEvenementById(this.idE).subscribe ((data: any) =>{
    this.eventById = data;
    console.log(this.eventById); 

  });//event de l'id passer en url param
  
  this.ev.getParticipantById(Number(localStorage.getItem("user-id")))
  this.l.getLoginPar().subscribe((res:any)=>{
    this.AllParticipant = res;
    console.log(this.AllParticipant);
    this.CurrentParticipant.push(this.partById);
    console.log("--", this.CurrentParticipant);
    this.CurrentEvent.push(this.eventById);
    console.log("--", this.CurrentEvent);
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id)
      if (id !== null) {
        const idNum = +id;
        const authToken = Math.random().toString(36).substring(2); // jeton d'authentification factice
        this.ps.getParticipationForPar(idNum, authToken)
          .subscribe((participants) => {
            this.participations = participants;
          });
          console.log(id);

      }
    });
  })
  this.InitForm();
}
InitForm(){
  this.ParForm = this.fb.nonNullable.group({
    dateRes : [new Date()],
    nbPrs : [0],
    client: [],
    cinema:[],
    email:[localStorage.getItem("user-email"),],
    nom:[localStorage.getItem("user-nom"),],
    prenom:[localStorage.getItem("user-prenom"),],
  })
}
public get datePar(){ 
  return this.ParForm.get('datePar'); 
}
public get nbPrs(){ 
  return this.ParForm.get('nbPrs'); 
}
public get participant(){ 
  return this.ParForm.get('participant'); 
}
public get event(){ 
  return this.ParForm.get('event'); 
}
  getEvent(){
    this.ev.getEvenementById(this.idE).subscribe(res=>{
       this.data = res;
    })
  }
  goback(){
    this.router.navigate(['/dashboard/home/:id']);
  }
  getParticiper(){
    this.ps.addParticipation(this.ParForm.value).subscribe(data=>this.participations.push(data));
    alert("participation faite avec succee !")
    console.log(this.ParForm.value)
  }
  onVider(){
    this.ParForm.reset();
  }
   

  getPr(){
    this.ps.getParticipationById(this.idE).subscribe(res=>{
        this.data = res;
    })
  }
}
