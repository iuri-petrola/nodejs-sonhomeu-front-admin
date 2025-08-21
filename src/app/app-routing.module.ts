import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosListComponent } from './pages/produtos-list/produtos-list.component';
import { ProdutosCadastrarComponent } from './pages/produtos-cadastrar/produtos-cadastrar.component';
import { CategoriaCadastrarComponent } from './pages/categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';
import { VendasComponent } from './pages/relatorio/vendas/vendas.component';
import { ProdutoEditarComponent } from './pages/produtos-editar/produtos-editar.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosListComponent },
  { path: 'produtos/cadastrar', component: ProdutosCadastrarComponent },
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/cadastrar', component: CategoriaCadastrarComponent },
  { path: 'relatorio-vendas', component: VendasComponent},
  { path: 'produto-editar/:id', component: ProdutoEditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
