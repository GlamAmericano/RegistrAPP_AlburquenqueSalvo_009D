import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-recuperacion',
  templateUrl: './codigo-recuperacion.page.html',
  styleUrls: ['./codigo-recuperacion.page.scss'],
})
export class CodigoRecuperacionPage implements OnInit {

  usuario = {
    codigo : ''
  }

  constructor() { }

  ngOnInit() {
  }


}


