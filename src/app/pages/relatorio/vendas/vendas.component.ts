import { Component } from '@angular/core';
import { PedidosService } from 'src/app/core/servicos/pedidos.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {

  vendas: any[] = [];

    constructor(
      private pedidosService: PedidosService,
    ) {}


  ngOnInit(): void {
    this.pedidosService.listarPedidosFinalizados().subscribe(res => {
      //console.log('Resposta da API:', res);
      //console.log('Primeiro pedido:', res[0]);
      console.log('Nome do cliente:', res[0]?.user?.name);
      this.vendas = res;
    });
  }


}
