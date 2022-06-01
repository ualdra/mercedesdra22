import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-llanta',
  templateUrl: './llanta.component.html',
  styleUrls: ['./llanta.component.scss'],
})
export class LlantaComponent implements OnInit {
  listConfigurations: any = {};

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Output() typeConfigurator = new EventEmitter<number>();
  @Input() precio!: string;
  @Input() imagen!: string;

  constructor() {}

  ngOnInit(): void {}

  seleccionarLlanta(): void {
    this.typeConfigurator.emit(5);
  }
}
