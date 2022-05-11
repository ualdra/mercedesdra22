import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorComponent } from './motor/motor.component';
import { MotoresComponent } from './motores/motores.component';
import { TapiceriaComponent } from './tapiceria/tapiceria.component';
import { GarageComponent } from './garage/garage.component';

const routes: Routes = [
  {path:'motor', component: MotorComponent},
  {path:'motores', component: MotoresComponent},
  {path:'tapiceria', component:TapiceriaComponent},
  {path:'garage', component:GarageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
