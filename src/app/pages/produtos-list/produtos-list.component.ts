import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/core/servicos/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {
  
  produtos: any[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.listar().subscribe(res => {
      this.produtos = res;
    });
  }

}
