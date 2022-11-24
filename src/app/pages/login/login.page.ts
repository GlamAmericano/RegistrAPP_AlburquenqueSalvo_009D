import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroService, Estudiante } from '../../services/registro.service';
import { RegistroDocenteService, Docente } from '../../services/registro-docente.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  estudiantes : Estudiante[];
  docentes : Docente[];  

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController,
    private navCtrl: NavController, private modalCtrl: ModalController,
    private registroService: RegistroService, private registroDocente: RegistroDocenteService,
    private fb: FormBuilder) { 
      this.formularioLogin = this.fb.group({ 
        correo: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)])                
      })
    }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    var a = false;
    // INGRESO ESTUDIANTES
    this.registroService.getEstudiante().then(datos=>{ 
      this.estudiantes = datos; 
      if (!datos || datos.length==0){
        this.datosNA();
        return null;
      }

      for (let obj of this.estudiantes){
        if (f.correo == obj.correo && f.password==obj.password){
          a = true ;
          console.log('Ingresado como Alumno');
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('nombre', obj.nombre);
          localStorage.setItem('apellidos', obj.apellidos);
          localStorage.setItem('carrera', obj.carrera);
          localStorage.setItem('profile', obj.correo);
          const data = [obj.correo, obj.nombre, obj.apellidos, obj.carrera, obj.password];
          localStorage.setItem('data', JSON.stringify(data));
          localStorage.setItem('type', 'estudiante');
          this.dismiss();
          this.navCtrl.navigateRoot('home');
          console.log(a);
        }
      }
      if (a == false) {
      this.registroDocente.getDocente().then(datos=>{ 
        this.docentes = datos; 
        if (!datos || datos.length==0){
          return null;
        }
        for (let obj of this.docentes){
          if (f.correo == obj.email && f.password==obj.password){
            a=true;
            console.log('Ingresado como Docente');
            localStorage.setItem('ingresado', 'true');
            localStorage.setItem('nombre', obj.nombre);
            localStorage.setItem('apellidos', obj.apellidos);
            localStorage.setItem('escuela', obj.escuela);
            localStorage.setItem('profile', obj.email);
            const data = [obj.email, obj.nombre, obj.apellidos, obj.escuela, obj.password];
            localStorage.setItem('data', JSON.stringify(data));
            localStorage.setItem('type', 'docente');
            this.dismiss();
            this.navCtrl.navigateRoot('home-docente');
            console.log(a);
          }
        }
        if(a == false){
          console.log("NO INGRESADO COMO ALUMNO");
           this.datosIncorrectos();
        }
      });
    }
  });
}


  async datosIncorrectos(){
    const alert = await this.alertCtrl.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }


  async datosNA(){
    const alert = await this.alertCtrl.create({
      header: 'Error...',
      message: '¡Los datos ingresados no existen!',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }


  async dismiss() {
    await this.modalCtrl.dismiss();
  }



  





}
