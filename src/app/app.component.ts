import { Component } from '@angular/core';

interface Componentes {
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

  componentes : Componentes[] = [
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
      redirectTo: 'ajustes'
    },
    {
      icon: 'scan-outline',
      nombre: 'Registrar Asistencia',
      redirectTo: '/escanear-qr'
    },
    {
      icon: 'school-outline',
      nombre: 'Consultar Asistencia',
      redirectTo: '/asistencia'
    },
    {
      icon: 'videocam-outline',
      nombre: 'Cine DUOC',
      redirectTo: '/api'
    },
  ]

  menu_components2 : Componentes[] = [
    {
      icon: 'home',
      nombre: 'Inicio',
      redirectTo: 'no'
    },
    {
      icon: 'hammer-outline',
      nombre: 'Ajustes',
      redirectTo: 'ajustes-docente'
    },
    {
      icon: 'qr-code-outline',
      nombre: 'Generar QR',
      redirectTo: 'generar-qr'
    }
  ]


  




}
