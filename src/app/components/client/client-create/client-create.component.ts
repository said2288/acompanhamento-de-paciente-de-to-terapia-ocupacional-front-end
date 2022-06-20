import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client.model';
import { ControllerService } from 'src/app/controllers/client.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { tinyValidator } from './HelpersFunctions/tinyValidator';

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

  form: FormGroup;

  constructor(private controllerService: ControllerService, private router: Router,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), 
        // Just letters and spaces in pattern. * one or more occurrences.
        Validators.pattern("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*")]],

      email: ['', [Validators.required, Validators.email]],

      // The pattern accepts numbers from 0-9 with 11 repetitions.
      telefone: ['', [Validators.required, Validators.pattern("^[0-9]{11}")]],

      // The \d in pattern search for numbers from 0-9.
      cpf: ['', [Validators.required, Validators.pattern("^\d{3}\.\d{3}\.\d{3}\-\d{2}")]],
      
      cnpj: ['', Validators.required],
      uf: ['', [Validators.required, Validators.maxLength(2)]],
      cidade: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }

  getErrorMessageEmail() {
    if (this.form.controls.email.hasError('required')) {
      return 'Preencha o campo de Email';
    }

    return this.form.controls.email.hasError('email') ? 'Email inválido' : '';
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
