import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { ControllerService } from 'src/app/controllers/client.service';
import { Client } from 'src/app/models/client.model';
@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Client>();

  displayedColumns = ['nome', 'email', 'telefone', 'cpf', 'cnpj',
    'uf', 'cidade', 'cep', 'bairro', 'endereco', 'numero', 'action']

  constructor(private controllerService: ControllerService) {}

  disableClient(client: Client): void {
    this.controllerService.disableClient(client).subscribe(() => {
      this.controllerService.showMessage('Cliente desabilitado com sucesso!')  
    })
  }

  applyFilter(filter: String) {
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
  }

  ngOnInit(): void {
    this.controllerService.read().subscribe(clients => {
      this.dataSource.data = clients as Client[];
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
