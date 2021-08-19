import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client.model';
import { ControllerService } from 'src/app/controllers/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    nome: '',
    email: '',
    telefone: null,
    cpf: null,
    cnpj: null,
    uf: '',
    cidade: '',
    cep: null,
    bairro: '',
    endereco: '',
    numero: null
  }

  constructor(private controllerService: ControllerService, private router: Router) {}

  ngOnInit(): void {
  }

  personalData(): void {
    this.controllerService.create(this.client).subscribe(() => {
      this.controllerService.showMessage('Dados pessoais salvo!')
      this.router.navigate(['/cliente-crud'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente-crud'])
  }
}
