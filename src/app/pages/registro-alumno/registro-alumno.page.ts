import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  usuario = {
    nombres: '',
    apellidos: '',
    carrera: '',
    email: '',
    password: ''
  };


  constructor(){}
              

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }



}
