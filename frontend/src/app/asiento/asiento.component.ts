import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.scss'],
})
export class AsientoComponent implements OnInit {
  @Input() nombre!: string;
  @Input() precio!: string;
  @Output() typeConfigurator = new EventEmitter<number>();
  @Input() caracteristicas!: string;
  @Input() imagen!: string;

  constructor() {}

  ngOnInit(): void {}

  seleccionarAsiento(): void {
    this.typeConfigurator.emit(4);
  }
}
