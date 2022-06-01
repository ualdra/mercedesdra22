import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.scss'],
})
export class AsientoComponent implements OnInit {
  @Input() nombre!: string;
  @Input() precio!: string;
  @Input() caracteristicas!: string;
  @Input() imagen!: string;

  constructor() {}

  ngOnInit(): void {}

  seleccionar(): void {
    console.log('SELECCIONADO');
  }
}
