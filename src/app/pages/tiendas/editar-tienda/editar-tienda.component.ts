import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda';
import { TiendasService } from 'src/app/services/tienda-service.service';

@Component({
  selector: 'app-editar-tienda',
  templateUrl: './editar-tienda.component.html',
  styleUrls: ['./editar-tienda.component.css']
})
export class EditarTiendaComponent {
  editedTienda: Tienda = { codigo: 0, nombre: '', latitud: 0, longitud: 0, distrito: 'San Isidro' };

  constructor(private route: ActivatedRoute, private router: Router, private tiendasService: TiendasService) {
    this.route.params.subscribe(params => {
      const tiendaCodigo = +params['codigo'];
      const tienda = this.tiendasService.getTiendaByCodigo(tiendaCodigo);

      if (tienda) {
        this.editedTienda = { ...tienda };
      } else {
        alert("No se encontró la tienda");
      }
    });
  }

  saveChanges(): void {
    this.tiendasService.updateTienda(this.editedTienda);
    this.router.navigate(['/tiendas']);
  }
}


