import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async codigoEscaneado(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Código QR escaneado exitosamente!',
      duration: 1500,
      position: position,
      icon: 'happy-outline'
    });

    await toast.present();
  }
}


