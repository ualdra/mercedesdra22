import { Component, OnInit } from '@angular/core';
import { configuraciones } from '../configuracion';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
})
export class GarageComponent implements OnInit {
  constructor() {}

  garageImage = 'assets/garage.png';
  configuracionesGaraje = configuraciones;
  ngOnInit(): void {}
}
