import { Component } from '@angular/core';
import { TiendasService } from 'src/app/services/tienda-service.service';


interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  },
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  },
  title: string,
  info: string
};


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent {

  currentMap: any;
  markers: any;


  constructor(private tiendasService: TiendasService) { }

  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 15,
    mapTypeControl: false
  };


  handleMapInitialized(map: google.maps.Map) {
    console.log('Mapa inicializado:', map);
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,
      });
    });
  }


  mapSantaAnita: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 15,
    mapTypeControl: false
  };

  mapSanMiguel: google.maps.MapOptions = {
    center: { lat: -12.078024, lng: -77.081620 },
    zoom: 15,
    mapTypeControl: false
  };

  mapSanIsidro: google.maps.MapOptions = {
    center: { lat: -12.096574, lng: -77.035287 },
    zoom: 15,
    mapTypeControl: false
  };

  verTiendas(distrito: string) {
    console.log(`Hiciste clic en ${distrito}`);
    switch (distrito) {
      case 'Santa Anita':
        this.verSantaAnita();
        break;
      case 'San Miguel':
        this.verSanMiguel();
        break;
      case 'San Isidro':
        this.verSanIsidro();
        break;
      default:
        break;
    }
  }

  verSantaAnita() {
    this.currentMap = this.mapSantaAnita;
    const tiendasSantaAnita = this.tiendasService.getTiendasByDistrito('Santa Anita');
    console.log('Tiendas Santa Anita:', tiendasSantaAnita);
    this.markers = tiendasSantaAnita.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));
  }
  verSanMiguel() {
    this.currentMap = this.mapSanMiguel;
    const tiendasSanMiguel = this.tiendasService.getTiendasByDistrito('San Miguel');
    console.log('Tiendas San Miguel:', tiendasSanMiguel);
    this.markers = tiendasSanMiguel.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));
  }

  verSanIsidro() {
    this.currentMap = this.mapSanIsidro;
    const tiendasSanIsidro = this.tiendasService.getTiendasByDistrito('San Isidro');
    console.log('Tiendas San Isidro:', tiendasSanIsidro);
    this.markers = tiendasSanIsidro.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));
  }
}
