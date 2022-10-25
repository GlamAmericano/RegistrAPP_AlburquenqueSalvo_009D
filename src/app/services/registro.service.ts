import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


//Por mientras se aplica interfaz con lo aprendido en clases. Lo más probable es que después se cambie.
export interface Estudiante {
  nombre: string;
  apellidos: string;
  email: string;
  carrera: string;
  password: string;
}


const USERS_KEY = 'estudiantes';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private stg: Storage;

  constructor(private storage: Storage) { 
    this.init();
  }
  
  //Se crea el storage para los estudiantes
  async init() {
    const storage = await this.storage.create();
    this.stg = storage;
  }

  //Creación de estudiante
  async agregarEstudiante(estudiante: Estudiante):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Estudiante[])=>{
      if (datos) {
        datos.push(estudiante);
        return this.storage.set(USERS_KEY, datos);
      }else {
        return this.storage.set(USERS_KEY, [estudiante]);
      }
    })
  }

  //Obtener todos los estudiantes dentro del storage
  getEstudiante():Promise<Estudiante[]>{
    return this.storage.get(USERS_KEY);
  }

  

  

}
