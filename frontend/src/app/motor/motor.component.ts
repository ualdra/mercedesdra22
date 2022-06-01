import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss'],
})
export class MotorComponent implements OnInit {
  @Input() nombre!: string;
  @Input() precio!: string;
  @Output() typeConfigurator = new EventEmitter<number>();
  @Input() caracteristicas = ['200CV', 'ABS'];
  @Input() detalles = new Map<string, string>([
    ['Consumo', '5L/100km'],
    ['Aceleración 0->100km/h', '9s'],
    ['Emisiones de CO2 en el ciclo mixto', '134 g/km'],
  ]);

  constructor() {}

  ngOnInit(): void {}

  seleccionarMotor() {
    this.typeConfigurator.emit(2);
  }
}
