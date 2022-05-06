import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input() modeloCoche!:string;
  @Input() carroceriaCoche!:number;
  @Input() imagenCoche!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
