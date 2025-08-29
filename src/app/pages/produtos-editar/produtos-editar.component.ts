import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/servicos/produtos.service';
import { AlertService } from 'src/app/core/servicos/alert.service';
import { CategoriaService } from 'src/app/core/servicos/categoria.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produtos-editar.component.html',
  styleUrls: ['./produtos-editar.component.scss']
})
export class ProdutoEditarComponent implements OnInit {
  id!: string;
  name: string = '';
  price: string = '';
  description: string = '';
  category_id: string = '';
  categorias: any[] = []; // lista de categorias
  imageFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    private alert: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Buscar todas categorias
    this.categoriaService.listarCategorias().subscribe((cats) => {
      this.categorias = cats;
    });

    // Carregar produto para edição
    this.produtosService.listar().subscribe((produtos) => {
      console.log('🟢 Produtos recebidos:', produtos);
      const p = produtos.find((prod) => prod.id === this.id);
      console.log('🔵 Produto encontrado para edição:', p);
      if (p) {
        this.name = p.name;
        this.price = p.price;
        this.description = p.description;
        this.category_id = (p as any).category_id;
      }
    });
  }

  onFileChange(event: any) {
    this.imageFile = event.target.files[0] ?? null;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('category_id', this.category_id);
    if (this.imageFile) formData.append('file', this.imageFile);

    this.produtosService.editarProduto(this.id, formData).subscribe({
      next: () => {
        this.alert.success('Produto atualizado com sucesso!');
        this.router.navigate(['/produtos']);
      },
      error: (err) => {
        console.error('❌ Erro ao atualizar produto:', err);
        console.error('📩 Body enviado:', {
          name: this.name,
          price: this.price,
          description: this.description,
          category_id: this.category_id,
          file: this.imageFile ? this.imageFile.name : 'sem imagem'
        });
        this.alert.error(
          `Erro ao atualizar produto. ${err.error?.error || err.message || ''}`
        );
      }

    });
  }
}