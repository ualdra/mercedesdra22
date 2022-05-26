import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CarComponent implements OnInit {

  @Input() claseCoche!:string;
  @Input() nombreCoche!:string;
  @Input() modeloCoche!:string;
  @Input() precioCoche!:string;
  @Input() imgUrl!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
