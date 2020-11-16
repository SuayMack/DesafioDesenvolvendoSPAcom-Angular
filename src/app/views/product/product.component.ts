import { Component, OnInit } from '@angular/core';
import { produtos } from './models/products';

@Component({
  selector: 'spa-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  
 
  constructor() { }

    ngOnInit(): void {
  }

  valor: number;
  exibeTabela:  boolean = false;

  listaProdutos: produtos[] = [
    { nome: 'Call Of Duty',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      preco: 'R$ 160,00'
    },
    { nome: 'Call Of Duty2',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      preco: 'R$ 260,00'
    },
    { nome: 'Call Of Duty3',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      preco: 'R$ 360,00'
    }    
  ];

  displayedColumns: string[] = ['Nome', 'Descrição', 'Preço'];

  exibirTabela(){
    this.exibeTabela = true;
  }

  esconderTabela(){
    this.exibeTabela = false;
  }
   
}
