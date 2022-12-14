import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit{

  asistencia = [];

  constructor(private menuCtrl: MenuController, private asistenciaService: AsistenciaService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.cargarAsistencia();
    this.menuCtrl.enable(false);
  }

  async cargarAsistencia(event?:InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Cargando asistencia...",
      spinner: "circles",
    });
    await loading.present();

    this.asistenciaService.mostrarAsistencia().subscribe(
      (res) => {
        loading.dismiss();
        let stringifyRespuesta = JSON.stringify(res);
        this.asistencia = JSON.parse(stringifyRespuesta);
        event?.target.complete();
      },
      (e) => {
        console.log(e);
        loading.dismiss();
      }
    );
  };


}
