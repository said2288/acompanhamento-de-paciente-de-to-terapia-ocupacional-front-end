import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ControllerService } from 'src/app/controllers/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: any
  client: Client = {}

  constructor(
    private controllerService: ControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.route.params.subscribe(params => this.id = params['id']) }

  ngOnInit(): void {
    this.controllerService.readById(this.id).subscribe(client => {
      this.client = client
    })
  }
  
  updateClient(): void {
    this.controllerService.edit(this.client).subscribe(() => {
      this.controllerService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(['/cliente-crud'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cliente-crud'])
  }

}
