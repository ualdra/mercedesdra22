import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {
  nombre:string = "A 180 Compacto";
  precio = "34.324 €";
  caracteristicas = ["200CV", "ABS"];
  detalles = new Map<string,string>();

  constructor() {
    this.detalles.set("Consumo","5L/100km")
    this.detalles.set("Aceleración 0->100km/h","9s")
    this.detalles.set("Emisiones de CO2 en el ciclo mixto","134 g/km")
  }

  ngOnInit(): void {

  }

}
