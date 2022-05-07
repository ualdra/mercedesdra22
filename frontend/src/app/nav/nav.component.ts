import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CarService } from '../car.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  cars: any = [];
  modelCars : any = {};
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

    this.modelCars = {}
    this.carService.getModel(carroceria).subscribe((resp) => {

      resp.forEach((item: { vehicleClass: { className: string | number; }; modelId: any; name: any; priceInformation : any }) => {
        if (!this.modelCars[item.vehicleClass.className]) {
          this.modelCars[item.vehicleClass.className] = [];
        }
        this.modelCars[item.vehicleClass.className].push({modelId : item.modelId, name:item.name, price: item.priceInformation.price});
    });
      console.log(this.modelCars);
    });
  }
}
