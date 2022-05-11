import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CarComponent implements OnInit {

  @Input() modeloCoche!:string;
  @Input() carroceriaCoche!:number;
  @Input() imagenCoche!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
