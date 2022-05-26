import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asiento',
  templateUrl: './asiento.component.html',
  styleUrls: ['./asiento.component.scss']
})
export class AsientoComponent implements OnInit {
  @Input() nombre = "Paquete de tapizado de cuero";
  @Input() precio = "1.851,30 €";
  @Input() caracteristicas = ["Cuero marron", "Cuero negro"];
  @Input() imagen = "https://assets.oneweb.mercedes-benz.com/bbd/images/v1/5142/6/67/dc3d414c4d1a946b2e0ba724e78809137851b.jpg";



  constructor() { }

  ngOnInit(): void {
  }

  seleccionar():void{
    console.log("SELECCIONADO");
  }

}
