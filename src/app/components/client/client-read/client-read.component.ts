import { Component, OnInit } from '@angular/core';

import { ControllerService } from 'src/app/controllers/client.service';
import { Client } from 'src/app/models/client.model';
@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[];

  displayedColumns = ['nome', 'email', 'telefone', 'cpf', 'cnpj',
    'uf', 'cidade', 'cep', 'bairro', 'endereco', 'numero', 'action']

  constructor(private controllerService: ControllerService) {   }

  ngOnInit(): void {
    this.controllerService.read().subscribe(clients => {
      this.clients = clients
    })
  }
}
