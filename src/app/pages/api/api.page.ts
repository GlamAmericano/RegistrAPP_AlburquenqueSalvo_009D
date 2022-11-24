import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;


  constructor(private apiService: ApiService, private loadingCtrl: LoadingController, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadMovies();
    this.menuCtrl.enable(false);
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    //Activar la barra de cargado
    const loading = await this.loadingCtrl.create({
      message: 'Cargando catálogo..',
      spinner: 'circles',
    });
    await loading.present();
    //Llamar al servicio y a la función para obtener los resultados de la api
    this.apiService.getTopRatedMovies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.movies.push(...res.results);
 
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (e) => {  //Manejo de errores
        console.log(e);
        loading.dismiss();
      }
    );
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }



}
