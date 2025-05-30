import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/servicos/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  categorias: any[] = [];

  constructor(private categoriasService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriasService.listarCategorias().subscribe(res => {
      this.categorias = res;
    });
  }


}
