import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-llanta',
  templateUrl: './llanta.component.html',
  styleUrls: ['./llanta.component.scss']
})
export class LlantaComponent implements OnInit {

  listConfigurations:any = {};

  @Input() nombre = "43,2 cm (17\")";
  @Input() descripcion="Llantas de aleación de 43,2 cm (17\") y 5 radios dobles color negro mate y pulidas a alto brillo"
  @Input() precio = "1.000 €";
  @Input() imagen="https://assets.oneweb.mercedes-benz.com/bbd/images/v1/5142/7/1f/4feac04a63b9844575c56c9d96a194b71864e.png"

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar():void {
    console.log("SELECCIONADO");
  }

}
