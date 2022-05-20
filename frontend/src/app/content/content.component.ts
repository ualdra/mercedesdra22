import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CarService } from '../car.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  cars: any = [];
  modelCars : any = [];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private carService: CarService
  ) {}

  ngOnInit(): void {}

  getModel(carroceria: String) {

    this.modelCars = []
    this.carService.getModel(carroceria).subscribe((resp) => {

      resp.forEach((item: { vehicleClass: { className: any }; modelId: any; name: any; priceInformation : any,  }) => {

        if (!this.modelCars.some((e: { class: any; }) => e.class == item.vehicleClass.className)) {
          this.modelCars.push({class : item.vehicleClass.className, cars : []});

        //this.modelCars.find((element: string | number) => element == item.vehicleClass.className).push([]);
        }

        this.modelCars.find(((element: { class: any; cars : [] }) => element.class == item.vehicleClass.className)).cars.push({modelId : item.modelId, name:item.name, price: item.priceInformation.price});
        this.modelCars.find(((element: { class: any; cars : [] }) => element.class == item.vehicleClass.className)).cars.sort((a: { price: number; },b: { price: number; }) => a.price - b.price)

      });

    console.log( this.modelCars );

    });

  }

}
