import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParService } from '../lesService/login-par.service';
import { Paricipant } from '../LesClasses/paricipant';
import { EventService } from '../lesService/event.service';

@Component({
  selector: 'app-sign-up-par',
  templateUrl: './sign-up-par.component.html',
  styleUrls: ['./sign-up-par.component.css']
})
export class SignUpParComponent implements OnInit {
  loginForm !: FormGroup;
  AllParticipant : Paricipant []=[];
  constructor(private fb :FormBuilder,private loginservice:LoginParService,private ev:EventService){}
  ngOnInit(): void {
    this.loginservice.getLoginPar().subscribe((data:any)=>{
      this.AllParticipant = data
    })

    this.initLoginPForm();
  }
  initLoginPForm(){
    this.loginForm = this.fb.nonNullable.group({
      id : [],
      e_mail : ['',Validators.required],
      pwd : ['',Validators.required],
      nom:['',Validators.required],
      cin:[,Validators.required],
      age:[,Validators.required],
      prenom:['',Validators.required]

    });
    this.ev.getParticipant().subscribe((res:any)=>{
      this.AllParticipant = res;
    })
}
  public get nom(){ 
    return this.loginForm.get('nom'); 
  }
  public get prenom(){ 
    return this.loginForm.get('prenom'); 
  }
  public get age(){ 
    return this.loginForm.get('age'); 
  }
  public get pwd(){ 
    return this.loginForm.get('pwd'); 
  }
  public get e_mail(){ 
    return this.loginForm.get('e_mail'); 
  }
  public get cin(){ 
    return this.loginForm.get('cin'); 
  }
  CreateParticipant(){
    this.ev.addParticipant(this.loginForm.value).subscribe((data:any)=>this.AllParticipant.push(data)) 
    alert("Welcom too Event.com! You are our client Now");
    alert(this.AllParticipant);
  }
}
