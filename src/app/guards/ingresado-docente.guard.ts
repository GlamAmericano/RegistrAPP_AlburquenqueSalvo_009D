import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoDocenteGuard implements CanActivate {

  constructor(private navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')=='true'){
        return true; 
      }
      else{
        this.navCtrl.navigateRoot('bienvenida');
        return false;
      }
      return true;
  }
  
}
