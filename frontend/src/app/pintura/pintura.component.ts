import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.scss'],
})
export class PinturaComponent implements OnInit {
  listConfigurations: any = {};
  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() precio!: string;
  @Input() imagen!: string;
  // @Input() redireccion="";

  // nombre="Cuero"  //Insertar el nombre s
  // descripcion="Tapizado en cuero marrón " //Insertar la descripción
  // precio="26570 €" //insertar el precio
  // imagen="https://www.polipiel.com/server/Portal_0007615/img/products/solar-color-marron-oscuro_995892.jpg" //Aqui colocar la imagen
  // redireccion="" //Sitio o imagen que devuelve al hacer click sobre la tarjeta

  // getConfigurationsList(){
  //   this.listConfigurations = {}
  //   this.carService.getConfigurations().subscribe((resp:any) => {
  //     resp.forEach((item: {id: any; url: any})  => {
  //       //no funciona
  //       this.listConfigurations["configurations"].push({id: item.id, url:item.url});
  //       console.log(this.listConfigurations)
  //     });
  //     return this.listConfigurations;
  //   });
  // }

  seleccionar(): void {
    console.log('SELECCIONADO');
  }
}
