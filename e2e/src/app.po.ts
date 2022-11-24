import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  //Se busca la clase de un botón para verificar un nombre exacto
  async getTituloRegistro():Promise<string> {
    return element(by.css('app-root .btnLogin')).getText();
  }

  //Se busca un botón para verificar que contenga el texto "Canjear"
  async getDetallesAPI():Promise<string> {
    return element(by.css('app-root .ion-button')).getText();
  }


  //Se busca la existencia de un método para cerrar sesión con la etiqueta js y el nombre del método
  async getCerrarSesión():Promise<any> {  
    return element(by.js('app-root cerrarSesion')).getText();
  }

  //Se busca una clase para posteriormente verificar que esté definida
  async verificarCuenta():Promise<any> {
    return element(by.css('app-root .tieneCuenta')).getText();
  }







}


