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
      redirectTo: 'no'
    },
    {
      icon: 'people-outline',
      nombre: 'Nosotros',
      redirectTo: '/nosotros'
    },
    {
      icon: 'hammer-outline',
      nombre: 'Ajustes',
      redirectTo: 'no'
    },
    {
      icon: 'log-out-outline',
      nombre: 'Cerrar Sesión',
      redirectTo: '/login'
    }

  ]


}
