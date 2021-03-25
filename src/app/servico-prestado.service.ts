import { environment } from './../environments/environment';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}
  salvar(servicoPrestado: ServicoPrestado) {
    return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado);
  }
}
