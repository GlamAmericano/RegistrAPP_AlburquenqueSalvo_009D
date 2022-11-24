import { AppPage } from './app.po';

describe('Pruebas E2E RegistrAPP', () => {
  let page: AppPage;

  //Configuración
  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1: Botón para Iniciar Sesión, contiene específicamente el texto => Iniciar Sesión', () => {
    page.navigateTo();
    expect(page.getTituloRegistro()).toContain('Iniciar Sesión');
  });

  it('Prueba 2: Al revisar los detalles de una película, existe un botón que contiene el texto Canjear.', () => {
    page.navigateTo();
    expect(page.getDetallesAPI()).toContain('Canjear');
  }); 

  it('Prueba 3: Existe un método para cerrar sesión', () => {
    page.navigateTo();
    expect(page.getCerrarSesión()).toContain('Cerrar Sesion');
  });

  it('Prueba 4: Está definido en ambos registros un apartado para iniciar sesión si tienes cuenta en el sistema', () => {
    page.navigateTo();
    expect(page.verificarCuenta()).toBeDefined();
  });

  







});
