import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  
  pessoa: Pessoa = new Pessoa();
  pessoas: Array<Pessoa> = [];
  isEdit: Boolean = false;
  index: number = null;


  constructor(
      private localStorageService: LocalStorageService
  ) {
      if (this.localStorageService.get('pessoas') != null) {
          this.pessoas = this.localStorageService.get('pessoas');
      }
  }

  ngOnInit() {
      this.pessoa = new Pessoa();
  }

  salvarPessoa() {
      if(this.nomeIgual()){
          this.pessoas.push({...this.pessoa});
          this.localStorageService.set('pessoas', this.pessoas);
          document.getElementById("pessoa-form")['reset']();
      } else {
          alert('Este Nome já Existe');
      }
  }

  deletarPessoa(i: any) {
      this.pessoas.splice(i,1);
      this.localStorageService.set('pessoas', this.pessoas);
      document.getElementById("pessoa-form")['reset']();
  }

  editarPessoa(prod: Pessoa, i: any) {
      if(!this.isEdit){
          this.isEdit = true;
          this.index = i;
          this.pessoa = {...prod}
      }else {
          this.pessoas[this.index] = {...this.pessoa};
          this.isEdit = false;
          this.index = null
          document.getElementById("pessoa-form")['reset']();
      }
  }

  nomeIgual(){
      let igual = 0
      this.pessoas.forEach(x => {
          if(x.nome == this.pessoa.nome){
              igual= 1;
              return;
          }
      })
      if(igual > 0) {
          return false;
      }else{
          return true;
      }
  }


}
