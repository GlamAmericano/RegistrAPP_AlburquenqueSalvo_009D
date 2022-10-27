import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Docente {
  nombre: string;
  apellidos: string;
  email: string;
  escuela: string;
  password: string;
}

const TEACHERS_KEY = 'docentes';


@Injectable({
  providedIn: 'root'
})
export class RegistroDocenteService {

  private stg : Storage;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.stg = storage;
  }

  //Creación de docente
  async agregarDocente(docente: Docente):Promise<any>{
    return this.storage.get(TEACHERS_KEY).then((datos: Docente[])=>{
      if (datos) {
        datos.push(docente);
        return this.storage.set(TEACHERS_KEY, datos);
      }else {
        return this.storage.set(TEACHERS_KEY, [docente]);
      }
    })
  }

  //Obtener todos los estudiantes dentro del storage
  async getDocente():Promise<Docente[]>{
    return this.storage.get(TEACHERS_KEY);
  }

}
