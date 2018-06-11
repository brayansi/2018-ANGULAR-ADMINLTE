import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

    produto: Produto = new Produto();
    produtos: Array<Produto> = [];
    isEdit: Boolean = false;
    index: number = null;


    constructor(
        private localStorageService: LocalStorageService
    ) {
        if (this.localStorageService.get('produtos') != null) {
            this.produtos = this.localStorageService.get('produtos');
        }
    }

    ngOnInit() {
        this.produto = new Produto();
    }

    salvarProduto() {
        if(this.nomeIgual()){
            this.produtos.push({...this.produto});
            this.localStorageService.set('produtos', this.produtos);
            document.getElementById("produto-form")['reset']();
        } else {
            alert('Este Nome já Existe');
        }
    }

    deletarProduto(i: any) {
        this.produtos.splice(i,1);
        this.localStorageService.set('produtos', this.produtos);
        document.getElementById("produto-form")['reset']();
    }

    editarProduto(prod: Produto, i: any) {
        if(!this.isEdit){
            this.isEdit = true;
            this.index = i;
            this.produto = {...prod}
        }else {
            this.produtos[this.index] = {...this.produto};
            this.isEdit = false;
            this.index = null
            document.getElementById("produto-form")['reset']();
        }
    }

    nomeIgual(){
        let igual = 0
        this.produtos.forEach(x => {
            if(x.nome == this.produto.nome){
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
