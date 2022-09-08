import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-password',
  templateUrl: './nuevo-password.page.html',
  styleUrls: ['./nuevo-password.page.scss'],
})
export class NuevoPasswordPage implements OnInit {

  usuario = {
    password: '',
    re_password: ''
  }

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async passwordChanged() {
    const alert = await this.alertCtrl.create({
      header: 'Contraseña cambiada exitosamente',
      message: 'Te hemos redireccionado a la pantalla de inicio de sesion para que ingreses con tus nuevas credenciales.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  

}
