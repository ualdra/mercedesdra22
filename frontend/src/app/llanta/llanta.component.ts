import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-llanta',
  templateUrl: './llanta.component.html',
  styleUrls: ['./llanta.component.scss'],
})
export class LlantaComponent implements OnInit {
  listConfigurations: any = {};

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() precio!: string;
  @Input() imagen!: string;

  constructor() {}

  ngOnInit(): void {}

  seleccionar(): void {
    console.log('SELECCIONADO');
  }
}
