import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroService } from '../../services/registro.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Iasistencias } from 'src/app/interfaces/iasistencia2.ts';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  code: any;


  constructor(private menuCtrl: MenuController, private barcodeScanner: BarcodeScanner, private asistenciaService: AsistenciaService) {
    
   }

  ngOnInit() {
    
  }

  nombre = localStorage.getItem('nombre');
  apellidos = localStorage.getItem('apellidos');
  carrera = localStorage.getItem('carrera');

  fecha = new Date();
  fechaActual = this.fecha.getDate() + '/' + (this.fecha.getMonth() + 1) + '/' + this.fecha.getFullYear()

  nuevaAsistencia: Iasistencias = {
    nombreAsignatura: "",
    modulo: "",
    seccion: "",
    fecha: this.fechaActual
  }



  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');

  }

  escanearQR(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.asistenciaService.crearAsistencia(this.nuevaAsistencia).subscribe();
     }).catch(err => {
         console.log('Error', err);
     });
  }
  



  

}
