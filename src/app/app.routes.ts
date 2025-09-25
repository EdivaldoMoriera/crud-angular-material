import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Consulta } from './consulta/consulta';

export const routes: Routes = [{
  path: 'cadastro', pathMatch: 'full', component: Cadastro
},
{
  path: 'consulta', pathMatch: 'full', component: Consulta
}
];
