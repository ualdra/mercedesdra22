import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  constructor() { }

  garageImage = "assets/garage.png";
  configuraciones: any[] = [];

  ngOnInit(): void {

  }

}
