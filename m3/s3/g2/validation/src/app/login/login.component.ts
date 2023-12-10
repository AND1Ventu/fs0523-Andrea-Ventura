import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){

    this.form = this.fb.group({
      nome:this.fb.control(null, [Validators.required]),
      cognome:this.fb.control(null, [Validators.required]),
      password:this.fb.control(null, [Validators.required]),
      confermaPwd:this.fb.control(null, [Validators.required]),
      genere:this.fb.control(null, [Validators.required]),
      imgProfile:this.fb.control(null, [Validators.required]),
      bio:this.fb.control(null, [Validators.required]),
      username:this.fb.control(null, [Validators.required]),
    });

  }

  isValid(fieldName:string){
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName:string){
    return this.form.get(fieldName)?.touched
  }

  send(){
    console.log(this.form.value);

}
