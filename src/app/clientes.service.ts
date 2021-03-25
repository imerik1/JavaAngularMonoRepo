import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiURL: string = environment.apiURL + '/api/clientes/';

  constructor(private http: HttpClient) {}

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  putCliente(cliente: Cliente, id: number): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}${id}`, cliente);
  }

  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}${id}`);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}${id}`);
  }
}
