import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../ServicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css'],
})
export class ServicoPrestadoFormComponent implements OnInit {
  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  success = false;
  errors: string[];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getAllCliente().subscribe((response) => {
      this.clientes = response;
    });
  }

  onSubmit() {
    this.service.postServico(this.servico).subscribe(
      (response) => {
        this.success = true;
        this.errors = null;
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        console.log(errorResponse);
      }
    );
  }
}
