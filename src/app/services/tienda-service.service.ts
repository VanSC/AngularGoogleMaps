import { Injectable } from '@angular/core';
import { Tienda } from '../models/tienda';

@Injectable({
  providedIn: 'root',
})
export class TiendasService {

  private tiendas: Tienda[] = [
    { codigo: 1, nombre: 'Britanico', latitud: -12.077611894469142, longitud: -77.09093417547342, distrito: 'San Miguel' },
    { codigo: 2, nombre: 'Marina Almenara', latitud: -12.077271068532731, longitud: -77.08992160133087, distrito: 'San Miguel' },
    { codigo: 3, nombre: 'Calidda', latitud: -12.07822053557842, longitud: -77.08958900739634, distrito: 'San Miguel' },
    { codigo: 4, nombre: 'Leña & Carbon', latitud: -12.043051876432369, longitud: -76.96996257328973, distrito: 'Santa Anita' },
    { codigo: 5, nombre: 'Sonido Castañeda', latitud: -12.04184924275937, longitud: -76.96981896182965, distrito: 'Santa Anita' },
    { codigo: 6, nombre: 'Pasteleria la condesa', latitud: -12.042294715416656, longitud: -76.96811459709706, distrito: 'Santa Anita' },
    { codigo: 7, nombre: 'Don Marino', latitud: -12.099594657419198, longitud: -77.03663873697526, distrito: 'San Isidro' },
    { codigo: 8, nombre: 'Astrid y Gaston', latitud: -12.096171293141685, longitud: -77.03480797268466, distrito: 'San Isidro' },
    { codigo: 9, nombre: 'La Cristina', latitud: -12.097818316376335, longitud: -77.03167515247564, distrito: 'San Isidro' }

  ];


  constructor() { }

  getTiendas(): Tienda[] {
    return this.tiendas;
  }

  addTienda(tienda: Tienda): void {
    tienda.codigo = this.tiendas.length + 1;
    tienda.codigo = this.getNextCodigo(); // Asignar un nuevo código
    this.tiendas.push(tienda);
  }

  updateTienda(tienda: Tienda): void {
    const index = this.tiendas.findIndex(t => t.codigo === tienda.codigo);
    if (index !== -1) {
      this.tiendas[index] = tienda;
    }
  }

  getTiendaByCodigo(codigo: number): Tienda | undefined {
    return this.tiendas.find(t => t.codigo === codigo);
  }

  deleteTiendaByCodigo(codigo: number): void {
    const index = this.tiendas.findIndex(t => t.codigo === codigo);
    if (index !== -1) {
      this.tiendas.splice(index, 1);
    }
  }
  getTiendasByDistrito(distrito: 'Santa Anita' | 'San Miguel' | 'San Isidro'): Tienda[] {
    return this.tiendas.filter(tienda => tienda.distrito === distrito);
  }

  private getNextCodigo(): number {
    const maxCodigo = this.tiendas.reduce((max, tienda) => (tienda.codigo > max ? tienda.codigo : max), 0);
    return maxCodigo + 1;
  }
}
