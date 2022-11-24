import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  constructor(private menuCtrl: MenuController) {
    
   }

  ngOnInit() {
    
  }

  nombre = localStorage.getItem('nombre');
  apellidos = localStorage.getItem('apellidos');
  carrera = localStorage.getItem('carrera');



  mostrarMenu(){
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');

  }

  



  

}
