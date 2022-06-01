import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-configuracion-tarjeta',
  templateUrl: './configuracion-tarjeta.component.html',
  styleUrls: ['./configuracion-tarjeta.component.scss'],
})
export class ConfiguracionTarjetaComponent implements OnInit {
  listConfigurations: any = {};
  constructor(private carService: CarService) {}

  ngOnInit(): void {}
  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() precio!: string;
  @Input() imagen!: string;

  getConfigurationsList() {
    this.listConfigurations = {};
    this.carService.getConfigurations().subscribe((resp: any) => {
      resp.forEach((item: { id: any; url: any }) => {
        //no funciona
        this.listConfigurations['configurations'].push({
          id: item.id,
          url: item.url,
        });
        console.log(this.listConfigurations);
      });
      return this.listConfigurations;
    });
  }
}
