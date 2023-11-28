import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginParService } from '../lesService/login-par.service';
import { Paricipant } from '../LesClasses/paricipant';
import { ParticipantService } from '../lesService/participant.service';

@Component({
  selector: 'app-sign-up-par',
  templateUrl: './sign-up-par.component.html',
  styleUrls: ['./sign-up-par.component.css']
})
export class SignUpParComponent implements OnInit {
  loginForm !: FormGroup;
  AllParticipant! : Paricipant[];
  constructor(private fb :FormBuilder, private par:ParticipantService){}
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
  public get email(){
    return this.loginForm.get('e_mail');
  }
  public get cin(){
    return this.loginForm.get('cin');
  }

  CreateParticipant(){
    this.par.registerParticipant(this.email,this.pwd,this.nom,this.prenom,this.age,this.cin).subscribe( paricipant=> this.AllParticipant.push(paricipant))
    alert("Welcom too Event.com! You are our client Now");
  }
}
