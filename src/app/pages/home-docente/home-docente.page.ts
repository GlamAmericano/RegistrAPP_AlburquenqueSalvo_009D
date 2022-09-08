import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
