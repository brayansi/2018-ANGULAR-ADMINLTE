import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  // { path: '', redirectTo: 'produto', pathMatch: 'full' },
  { path: 'produto', component: ProdutoComponent },
  { path: 'pessoa', component: PessoaComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
