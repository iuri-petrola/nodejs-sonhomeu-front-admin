import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/servicos/alert.service';
import { ProdutosService } from 'src/app/core/servicos/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {
  
  produtos: any[] = [];

  constructor(
    private produtosService: ProdutosService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtosService.listar().subscribe({
      next: (dados) => this.produtos = dados,
      error: () => this.alert.error("Erro ao carregar produtos.")
    });
  }

  deletarProduto(id: string) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      this.produtosService.deletarProduto(id).subscribe({
        next: () => {
          this.alert.success("Produto removido com sucesso!");
          this.carregarProdutos();
        },
        error: () => this.alert.error("Erro ao remover produto.")
      });
    }
  }
}
