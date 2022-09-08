import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombres: '',
    apellidos: '',
    email: '',
    password: ''
  };

  

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async cuentaCreada() {
    const alert = await this.alertCtrl.create({
      header: 'Cuenta creada exitosamente',
      message: 'Ahora comienza a disfrutar de la aplicación',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
