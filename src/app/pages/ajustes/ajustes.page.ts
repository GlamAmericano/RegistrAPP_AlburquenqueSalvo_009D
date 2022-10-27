import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async cerrarSesion() {
    const alerta = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Sesión no cerrada');
          }
        }, 
        {
          text: 'Confirmar',
          handler: (blah) => {
            localStorage.setItem('ingresado', 'false');
            this.navCtrl.navigateRoot('bienvenida');
            console.log('Sesión cerrada');
          }
        }
      ]
    })
    await alerta.present();
  }


}
