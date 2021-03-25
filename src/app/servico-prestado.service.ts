import { ServicoPrestadoBusca } from './servico-prestado/ServicoPrestadoBusca';
import { ServicoPrestado } from './servico-prestado/ServicoPrestado';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicoPrestadoService {
  apiURL: string = environment.apiURL + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}
  postServico(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    console.log(servicoPrestado);
    return this.http.post<ServicoPrestado>(`${this.apiURL}/`, servicoPrestado);
  }

  getServico(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {
    if (!nome) {
      nome = '';
    }
    const params = new HttpParams()
      .set('nome', nome)
      .set('mes', mes.toString())
      .toString();
    const url = this.apiURL + '?' + params.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
