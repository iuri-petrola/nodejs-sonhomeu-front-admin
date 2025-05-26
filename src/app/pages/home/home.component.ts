import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/servicos/alert.service';
import { PedidosService } from 'src/app/core/servicos/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pedidos: any[] = [];

  constructor(
    private pedidosService: PedidosService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.pedidosService.listarPedidos().subscribe(res => {
      //console.log('Resposta da API:', res);
      //console.log('Primeiro pedido:', res[0]);
      console.log('Nome do cliente:', res[0]?.user?.name);
      this.pedidos = res;
    });
  }

  finalizarPedido(cartId: string) {
    this.pedidosService.finalizarPedido(cartId).subscribe({
      next: () => {
        this.alert.success('Pedido finalizado com sucesso!');
        this.ngOnInit(); // recarrega a lista
      },
      error: () => {
        this.alert.error('Erro ao finalizar pedido.');
      }
    });
  }


}
