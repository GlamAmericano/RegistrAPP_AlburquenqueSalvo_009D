import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroDocenteService, Docente } from '../../services/registro-docente.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; 
  docentes: Docente[] = [];
  nuevoDocente:  Docente = <Docente>{};
  



  constructor(private alertCtrl: AlertController, private registroService: RegistroDocenteService, private toastCtrl: ToastController, private fb: FormBuilder){
    this.formularioRegistro = this.fb.group ({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      escuela: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(80)]),
      correo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@profesor.duoc+\\.cl$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)])
    })
  }

  ngOnInit() {
  }

  async CrearUsuario(){
    var a = 0;
    var form = this.formularioRegistro.value;
    this.registroService.getDocente().then(datos =>{
      this.docentes=datos;
      if(this.docentes!=null){
        for(let obj of this.docentes){
          if(obj.email==form.correo){
            a=1;
            this.emailDuplicado();
          }
        }
      }
      if(this.formularioRegistro.invalid){
        this.alertError();
      }
      if(this.formularioRegistro.valid && a!=1){
        this.nuevoDocente.nombre = form.nombre;
        this.nuevoDocente.apellidos = form.apellidos;
        this.nuevoDocente.email = form.correo;
        this.nuevoDocente.escuela = form.escuela;
        this.nuevoDocente.password = form.password;
        this.registroService.agregarDocente(this.nuevoDocente).then(dato=>{ 
          this.nuevoDocente = <Docente>{};
          this.showToast('Docente registrado existosamente!');
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
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }



}
