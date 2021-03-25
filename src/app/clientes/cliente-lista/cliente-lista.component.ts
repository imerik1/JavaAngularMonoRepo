import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: ClientesService) {}

  ngOnInit(): void {
    this.service.getAllCliente().subscribe((response) => {
      this.clientes = response;
    });
  }

  readyDelete(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deleteCliente(cliente: Cliente) {
    this.service.deleteCliente(cliente.id).subscribe(
      (response) => {
        this.mensagemSucesso = 'Cliente foi deletado com sucesso';
        this.ngOnInit();
      },
      (errorMessage) => {
        this.mensagemErro = 'Não foi possível remover o cliente';
      }
    );
  }
}
