import { ServicoPrestado } from './../servicoPrestado';
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

  constructor(private clienteService: ClientesService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getAllCliente().subscribe((response) => {
      this.clientes = response;
      console.log(this.clientes);
    });
  }

  onSubmit() {
    console.log(this.servico);
  }
}
