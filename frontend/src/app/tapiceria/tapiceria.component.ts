import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ConfiguracionTarjetaComponent } from '../configuracion-tarjeta/configuracion-tarjeta.component';
@Component({
  selector: 'app-tapiceria',
  templateUrl: './tapiceria.component.html',
  styleUrls: ['./tapiceria.component.scss']
})
export class TapiceriaComponent implements OnInit {

  constructor(    private carService: CarService) { }
/*
   */

  tapicerias:ConfiguracionTarjetaComponent[] = [];
 
  @Input() imagen="https://w0.peakpx.com/wallpaper/762/921/HD-wallpaper-2019-mercedes-benz-a-class-edition-1-upholstery-dinamica-microfibre-artico-man-made-leather-interior-car.jpg"
  
  ngOnInit(): void {
    const tapiceria1 = new ConfiguracionTarjetaComponent(this.carService);
  /* tapiceria2 = new ConfiguracionTarjetaComponent();
   tapiceria3 = new ConfiguracionTarjetaComponent();
   tapiceria4 = new ConfiguracionTarjetaComponent();
   tapiceria5 = new ConfiguracionTarjetaComponent();
   tapiceria6 = new ConfiguracionTarjetaComponent();*/
   this.tapicerias.push(tapiceria1)
    this.getTapiceria()
  }

  getTapiceria(){
    console.log(this.carService.getTapiceria())
  }
}
