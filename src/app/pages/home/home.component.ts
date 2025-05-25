import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/core/servicos/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.listarPedidos().subscribe(res => {
      //console.log('Resposta da API:', res);
      //console.log('Primeiro pedido:', res[0]);
      console.log('Nome do cliente:', res[0]?.user?.name);
      this.pedidos = res;
    });
  }
}
