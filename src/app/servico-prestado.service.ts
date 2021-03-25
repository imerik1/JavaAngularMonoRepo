import { ServicoPrestado } from './servico-prestado/ServicoPrestado';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURL + '/api/servicos-prestados/';

  constructor(private http: HttpClient) {}
  postServico(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    console.log(servicoPrestado);
    return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado);
  }
}
