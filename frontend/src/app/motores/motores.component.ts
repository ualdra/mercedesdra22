import { Component, OnInit } from '@angular/core';
import { MotorComponent } from '../motor/motor.component';

@Component({
  selector: 'app-motores',
  templateUrl: './motores.component.html',
  styleUrls: ['./motores.component.scss']
})
export class MotoresComponent implements OnInit {

  motor1 = new MotorComponent();
  motor2 = new MotorComponent();
  motores:MotorComponent[] = [this.motor1, this.motor2, this.motor1, this.motor2, this.motor1, this.motor2];

  constructor() {
    this.motor1.nombre ="HOLA";
  }

  ngOnInit(): void {
  }

}
