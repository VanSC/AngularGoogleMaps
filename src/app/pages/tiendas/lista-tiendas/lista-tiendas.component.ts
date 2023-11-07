import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda';
import { TiendasService } from 'src/app/services/tienda-service.service';

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})
export class ListaTiendasComponent implements OnInit {
  tiendas: Tienda[] = [];

  constructor(private tiendasService: TiendasService, private router: Router) {}

  ngOnInit(): void {
    this.tiendas = this.tiendasService.getTiendas();
  }

  deleteTienda(tienda: Tienda): void {
    if (tienda.codigo) {
      this.tiendasService.deleteTiendaByCodigo(tienda.codigo);
      this.tiendas = this.tiendasService.getTiendas();
    }
  }

  editTienda(tienda: Tienda): void {
    if (tienda.codigo) {
      this.router.navigate(['/tiendas/edit', tienda.codigo]);
    }
  }

  goToAddTienda(): void {
    this.router.navigate(['/tiendas/add']); // Navegar para agregar una nueva tienda
  }
}
