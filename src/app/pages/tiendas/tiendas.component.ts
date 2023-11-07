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
  markers: MarkerProperties[] = [
    {
      position: { lat: -12.043051876432369, lng: -76.96996257328973 },
      label: { color: 'black', text: 'Leña & Carbon', fontSize: '15px', fontWeight: 'bold' },
      title: 'Leña & Carbon',
      info: 'Santa Anita'
    },
    {
      position: { lat: -12.04184924275937, lng: -76.96981896182965 },
      label: { color: 'black', text: 'Sonido Castañeda', fontSize: '15px', fontWeight: 'bold' },
      title: 'Sonido Castañeda',
      info: 'Santa Anita'
    },
    {
      position: { lat: -12.042294715416656, lng: -76.96811459709706 },
      label: { color: 'black', text: 'Pasteleria la condesa', fontSize: '15px', fontWeight: 'bold' },
      title: 'Pasteleria la condesa',
      info: 'Santa Anita'
    },
    {
      position: { lat: -12.077611894469142, lng: -77.09093417547342 },
      label: { color: 'black', text: 'Britanico', fontSize: '15px', fontWeight: 'bold' },
      title: 'Britanico',
      info: 'San Miguel'
    },
    {
      position: { lat: -12.077271068532731, lng: -77.08992160133087 },
      label: { color: 'black', text: 'Marina Almenara', fontSize: '15px', fontWeight: 'bold' },
      title: 'Marina Almenara',
      info: 'San Miguel'
    },
    {
      position: { lat: -12.07822053557842, lng: -77.08958900739634 },
      label: { color: 'black', text: 'Calidda', fontSize: '15px', fontWeight: 'bold' },
      title: 'Calidda',
      info: 'San Miguel'
    },
    {
      position: { lat: -12.099594657419198, lng: -77.03663873697526 },
      label: { color: 'black', text: 'Don Marino', fontSize: '15px', fontWeight: 'bold' },
      title: 'Don Marino',
      info: 'San Isidro'
    },
    {
      position: { lat: -12.096171293141685, lng: -77.03480797268466 },
      label: { color: 'black', text: 'Astrid y Gaston', fontSize: '15px', fontWeight: 'bold' },
      title: 'Astrid y Gaston',
      info: 'San Isidro'
    },
    {
      position: { lat: -12.097818316376335, lng: -77.03167515247564 },
      label: { color: 'black', text: 'La Cristina Restaurant', fontSize: '15px', fontWeight: 'bold' },
      title: 'La Cristina Restaurant',
      info: 'San Isidro'
    },
  ];


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
    /*this.markers = tiendasSantaAnita.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));*/
  }
  verSanMiguel() {
    this.currentMap = this.mapSanMiguel;
    const tiendasSanMiguel = this.tiendasService.getTiendasByDistrito('San Miguel');
    console.log('Tiendas San Miguel:', tiendasSanMiguel);
    /*this.markers = tiendasSanMiguel.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));*/
  }

  verSanIsidro() {
    this.currentMap = this.mapSanIsidro;
    const tiendasSanIsidro = this.tiendasService.getTiendasByDistrito('San Isidro');
    console.log('Tiendas San Isidro:', tiendasSanIsidro);
    /*this.markers = tiendasSanIsidro.map(tienda => ({
      position: { lat: tienda.latitud, lng: tienda.longitud },
      label: { color: 'black', text: tienda.nombre, fontSize: '20px', fontWeight: 'bold' },
      title: tienda.nombre,
      info: tienda.distrito
    }));*/
  }
}
