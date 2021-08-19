import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './views/client-crud/client-crud.component';
import { HomeComponent } from './views/home/home.component';

import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

const routes: Routes = [
  {

    path: "",
    component: HomeComponent
  
  },
  {

    path: "cliente-crud",
    component: ClientComponent
  
  },
  {

    path: "cliente/dados",
    component: ClientCreateComponent
  
  },
  {

    path: "cliente/alteracao/:id",
    component: ClientUpdateComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
