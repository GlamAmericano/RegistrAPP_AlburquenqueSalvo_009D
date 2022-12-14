import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async cerrarSesion() {
    const alerta = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Seguro que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          //cssClass: 'alert-button-cancel',
          handler: (blah) => {
            console.log('Sesión no cerrada');
          }
        }, 
        {
          text: 'Cerrar Sesión',
          //cssClass: 'alert-button-confirm',
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
