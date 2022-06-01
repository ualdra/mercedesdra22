import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.scss'],
})
export class PinturaComponent implements OnInit {
  listConfigurations: any = {};
  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Output() typeConfigurator = new EventEmitter<number>();
  @Input() precio!: string;
  @Input() imagen!: string;

  seleccionarPintura(): void {
    this.typeConfigurator.emit(3);
  }
}
