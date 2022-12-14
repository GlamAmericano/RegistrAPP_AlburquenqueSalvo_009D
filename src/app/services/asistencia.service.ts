import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment2 } from 'src/environments/environment';
import { Iasistencias } from '../interfaces/iasistencia2.ts';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  mostrarAsistencia():Observable<Iasistencias> {
    return this.http.get<Iasistencias>(`${environment2.apiURL}/asistencia`);
  }

  crearAsistencia(nuevaAsistencia: Iasistencias):Observable<Iasistencias>{
    return this.http.post<Iasistencias>(`${environment2.apiURL}/asistencia`, nuevaAsistencia);
  }


}
