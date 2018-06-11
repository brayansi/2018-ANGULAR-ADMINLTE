import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
