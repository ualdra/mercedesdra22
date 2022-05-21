import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-tapiceria',
  templateUrl: './tapiceria.component.html',
  styleUrls: ['./tapiceria.component.scss']
})
export class TapiceriaComponent implements OnInit {

  constructor(private carService : CarService) { }
  imagen="https://w0.peakpx.com/wallpaper/762/921/HD-wallpaper-2019-mercedes-benz-a-class-edition-1-upholstery-dinamica-microfibre-artico-man-made-leather-interior-car.jpg"
  ngOnInit(): void {

  }
}
