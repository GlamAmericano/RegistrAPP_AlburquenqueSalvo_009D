import { Component } from '@angular/core';

interface Components {
  icon: string;
  nombre: string;
  redirectTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Components[] = [
    {
      icon: 'home',
      nombre: 'Inicio',
      redirectTo: '/home'
    },
    {
      icon: 'people-outline',
      nombre: 'Nosotros',
      redirectTo: '/nosotros'
    },
    {
      icon: 'scan-outline',
      nombre: 'Escanear Código',
      redirectTo: '/escanear-qr'
    },
    {
      icon: 'hammer-outline',
      nombre: 'Ajustes',
      redirectTo: ''
    },
    {
      icon: 'log-out-outline',
      nombre: 'Cerrar Sesión',
      redirectTo: '/login'
    }

  ]


}
