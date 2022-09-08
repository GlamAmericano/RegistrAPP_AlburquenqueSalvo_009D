import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-justificar',
  templateUrl: './justificar.page.html',
  styleUrls: ['./justificar.page.scss'],
})
export class JustificarPage implements OnInit {

  usuario = {
    destinatario : '',
    mensaje : ''
  }

  constructor() { }

  ngOnInit() {
  }

}
