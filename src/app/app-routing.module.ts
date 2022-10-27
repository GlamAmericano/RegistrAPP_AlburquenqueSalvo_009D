import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'tipo-registro',
    loadChildren: () => import('./pages/tipo-registro/tipo-registro.module').then( m => m.TipoRegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'codigo-recuperacion',
    loadChildren: () => import('./pages/codigo-recuperacion/codigo-recuperacion.module').then( m => m.CodigoRecuperacionPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'nuevo-password',
    loadChildren: () => import('./pages/nuevo-password/nuevo-password.module').then( m => m.NuevoPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home-docente',
    loadChildren: () => import('./pages/home-docente/home-docente.module').then( m => m.HomeDocentePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'mensaje',
    loadChildren: () => import('./pages/mensaje/mensaje.module').then( m => m.MensajePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'api/:id',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


