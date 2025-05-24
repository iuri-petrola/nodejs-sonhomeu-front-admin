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
      this.pedidos = res;
    });
  }
}
