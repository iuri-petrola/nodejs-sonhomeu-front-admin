import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/servicos/alert.service';
import { CategoriaService } from 'src/app/core/servicos/categoria.service';
import { ProdutosService } from 'src/app/core/servicos/produtos.service';

@Component({
  selector: 'app-produtos-cadastrar',
  templateUrl: './produtos-cadastrar.component.html',
  styleUrls: ['./produtos-cadastrar.component.scss']
})
export class ProdutosCadastrarComponent implements OnInit {

  nome = '';
  preco: number | null = null;
  descricao = '';
  categoriaSelecionada = '';
  imagem: File | null = null;
  categorias: any[] = [];

   constructor(
    private categoriaService: CategoriaService,
    private produtosService: ProdutosService,
    private alert: AlertService
  ) {}


    ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(res => {
        this.categorias = res;
      });
    }

    onFileChange(event: any) {
      const file = event.target.files[0];
      this.imagem = file;
    }


    onSubmit() {
      if (!this.nome || !this.preco || !this.descricao || !this.categoriaSelecionada || !this.imagem) {
        this.alert.error('Preencha todos os campos!');
        return;
    }

      const formData = new FormData();
      formData.append('name', this.nome);
      formData.append('price', String(this.preco));
      formData.append('description', this.descricao);
      formData.append('category_id', this.categoriaSelecionada);
      formData.append('file', this.imagem);



    this.produtosService.cadastrarProduto(formData).subscribe({
      next: () => {
        this.alert.success('Produto cadastrado com sucesso!');
        this.nome = '';
        this.preco = null;
        this.descricao = '';
        this.categoriaSelecionada = '';
        this.imagem = null;
      },
      error: () => this.alert.error('Erro ao cadastrar produto.')
    });
  }
}