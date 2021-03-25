import { Observable } from 'rxjs';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success = false;
  errors: string[];
  id: number;

  constructor(
    private service: ClientesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams[`id`];
      if (this.id) {
        this.service.getClienteById(this.id).subscribe(
          (response) => {
            this.cliente = response;
          },
          (errorMessage) => {
            this.cliente = new Cliente();
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.cliente.id) {
      this.service.putCliente(this.cliente, this.id).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorMessage) => {
          this.errors = ['Erro ao atualizar cliente.'];
          this.success = false;
        }
      );
    } else {
      this.service.postCliente(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }
}
