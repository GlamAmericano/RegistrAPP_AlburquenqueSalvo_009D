import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroService, Estudiante } from '../../services/registro.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  formularioRegistro: FormGroup; 
  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = <Estudiante>{};

  constructor(private alertCtrl: AlertController, private registroService: RegistroService, private toastCtrl: ToastController, private fb: FormBuilder){
    this.formularioRegistro = this.fb.group ({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
      carrera: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]),
      correo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@duocuc+\\.cl$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)])
    })
  }
              

  ngOnInit() {
  }

  async CrearUsuario(){
    var a = 0;
    var form = this.formularioRegistro.value;
    this.registroService.getEstudiante().then(datos =>{
      this.estudiantes=datos;
      if(this.estudiantes!=null){
        for(let obj of this.estudiantes){
          if(obj.correo==form.correo){
            a=1;
            this.emailDuplicado();
          }
        }
      }
      if(this.formularioRegistro.invalid){
        this.alertError();
      }
      if(this.formularioRegistro.valid && a!=1){
        this.nuevoEstudiante.nombre = form.nombre;
        this.nuevoEstudiante.apellidos = form.apellidos;
        this.nuevoEstudiante.correo = form.correo;
        this.nuevoEstudiante.carrera = form.carrera;
        this.nuevoEstudiante.password = form.password;
        this.registroService.agregarEstudiante(this.nuevoEstudiante).then(dato=>{ 
          this.nuevoEstudiante = <Estudiante>{};
          this.showToast('Estudiante registrado existosamente!');
        });
        this.formularioRegistro.reset();
      }
    })
  }

  async emailDuplicado(){
    const alert = await this.alertCtrl.create({
      header:'Error...',
      message:'Ya existe una cuenta registrada con este email.',
      buttons:['De Acuerdo']
    })
    await alert.present();
  }



  async alertError(){
    const alert = await this.alertCtrl.create({ 
      header: 'Error...',
      message: 'Debe completar todos los campos correspondientes',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      icon: 'happy-outline',
      position: 'top'
    })
    await toast.present();
  }

  






}
