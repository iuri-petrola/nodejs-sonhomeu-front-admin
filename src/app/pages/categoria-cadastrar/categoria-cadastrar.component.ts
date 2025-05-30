import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/core/servicos/categoria.service';
import { AlertService } from 'src/app/core/servicos/alert.service';

@Component({
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.scss']
})
export class CategoriaCadastrarComponent {
  nomeCategoria = '';

  constructor(private categoriaService: CategoriaService, private alert: AlertService) {}

  onSubmit() {
    if (!this.nomeCategoria.trim()) {
      this.alert.error('Informe um nome válido.');
      return;
    }

    this.categoriaService.cadastrarCategoria(this.nomeCategoria).subscribe({
      next: () => {
        this.alert.success('Categoria cadastrada com sucesso!');
        this.nomeCategoria = '';
      },
      error: () => this.alert.error('Erro ao cadastrar categoria.')
    });
  }
}