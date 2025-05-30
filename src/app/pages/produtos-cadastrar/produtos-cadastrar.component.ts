import { Component } from '@angular/core';
import { AlertService } from 'src/app/core/servicos/alert.service';
import { ProdutosService } from 'src/app/core/servicos/produtos.service';

@Component({
  selector: 'app-produtos-cadastrar',
  templateUrl: './produtos-cadastrar.component.html',
  styleUrls: ['./produtos-cadastrar.component.scss']
})
export class ProdutosCadastrarComponent {

  nomeProduto = '';

  constructor(private produtoService: ProdutosService, private alert: AlertService) {}

  onSubmit() {
    if (!this.nomeProduto.trim()) {
      this.alert.error('Informe um nome válido.');
      return;
    }

    this.produtoService.cadastrarProduto(this.nomeProduto).subscribe({
      next: () => {
        this.alert.success('Produto cadastrado com sucesso!');
        this.nomeProduto = '';
      },
      error: () => this.alert.error('Erro ao cadastrar Produto.')
    });
  }
}
