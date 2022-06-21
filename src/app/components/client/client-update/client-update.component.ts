import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ControllerService } from 'src/app/controllers/client.service';
import { Client } from 'src/app/models/client.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  id: any
  client: Client = {
    nome: '',
    email: '',
    telefone: null,
    cpf: null,
    cnpj: null,
      addressEntity: {
      uf: '',
      cidade: '',
      cep: null,
      bairro: '',
      endereco: '',
      numero: null
      }
  }

  form: FormGroup;

  constructor(
    private controllerService: ControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { this.route.params.subscribe(params => this.id = params['id']) }

  ngOnInit(): void {
    this.controllerService.readById(this.id).subscribe(client => {
      this.client = client
    })

    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), 
        // Just letters and spaces in pattern. * one or more occurrences.
        Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*")]],

      email: ['', [Validators.required, Validators.email]],

      // The pattern accepts numbers from 0-9 with 11 repetitions.
      telefone: ['', [Validators.required, Validators.pattern("^[0-9]{11}")]],

      cpf: ['', [Validators.required, Validators.pattern("^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}")]],

      cnpj: ['', [Validators.required, Validators.pattern("^[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2}")]],

      uf: ['', [Validators.required, Validators.pattern("^[A-Z]{2}")]],

      cidade: ['', [Validators.required, Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*")]],

      cep: ['', [Validators.required, Validators.pattern("^[0-9]{8}")]],

      bairro: ['', [Validators.required, Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*")]],

      endereco: ['', [Validators.required, Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*")]],

      numero: ['', [Validators.required, Validators.pattern("^[0-9]*")]]
    })
  }

  getErrorMessageEmail() {
    if (this.form.controls.email.hasError('required')) {
      return 'Preencha o campo de Email';
    }

    return this.form.controls.email.hasError('email') ? 'Email inválido' : '';
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
