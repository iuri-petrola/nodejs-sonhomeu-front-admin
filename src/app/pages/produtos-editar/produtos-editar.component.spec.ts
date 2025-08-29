import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCadastrarComponent } from './produtos-editar.component';

describe('ProdutosCadastrarComponent', () => {
  let component: ProdutosCadastrarComponent;
  let fixture: ComponentFixture<ProdutosCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosCadastrarComponent]
    });
    fixture = TestBed.createComponent(ProdutosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
