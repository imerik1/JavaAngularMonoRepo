import { ServicoPrestadoBusca } from './../ServicoPrestadoBusca';
import { Cliente } from './../../clientes/cliente';
import { ServicoPrestado } from './../ServicoPrestado';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css'],
})
export class ServicoPrestadoListaComponent implements OnInit {
  clientes: Cliente[] = [];
  lista: ServicoPrestadoBusca[];
  meses: number[];
  mes: number;
  nome: string;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
    this.clienteService.getAllCliente().subscribe((response) => {
      this.clientes = response;
    });
  }

  consultar() {
    this.service.getServico(this.nome, this.mes).subscribe((response) => {
      this.lista = response;
    });
  }
}
