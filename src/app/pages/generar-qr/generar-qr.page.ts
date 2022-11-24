import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit{


  isGenerated: boolean = false;
  qrCodeString='Debe ingresar los datos y generar el código QR.';
  scannedResult: any;
  fecha = new Date();
  fechaActual = this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + this.fecha.getFullYear()

  constructor(private menuCtrl: MenuController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  datos = {
    nombreAsignatura : '',
    seccion: '',
    fecha: this.fechaActual,
  }

  generarQr(){
    this.qrCodeString= 'Nombre de Asignatura: ' + this.datos.nombreAsignatura + ' / ' + 'Sección: ' + this.datos.seccion + ' / ' + 'Fecha de Generación QR: ' + this.datos.fecha  ;
  }

  async qrGenerado(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Código QR generado exitosamente!',
      duration: 1500,
      position: position,
      icon: 'happy-outline'
    });

    await toast.present();
  }

  verQr(){
    this.scannedResult = this.qrCodeString;
  }




}
