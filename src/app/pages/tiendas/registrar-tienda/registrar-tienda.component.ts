import { Component } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { TiendasService } from 'src/app/services/tienda-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tienda',
  templateUrl: './registrar-tienda.component.html',
  styleUrls: ['./registrar-tienda.component.css']
})
export class RegistrarTiendaComponent {
  distritos: string[] = ['Santa Anita', 'San Miguel', 'San Isidro'];

  nuevaTienda: Tienda = { codigo: 0, nombre: '', latitud: 0, longitud: 0, distrito: 'Santa Anita' };

  constructor(private tiendasService: TiendasService, private router: Router) {}

  addTienda(): void {
    this.tiendasService.addTienda(this.nuevaTienda);
    this.router.navigate(['/tiendas']);
  }
}
