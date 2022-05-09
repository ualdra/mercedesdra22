import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorComponent } from './motor/motor.component';
import { MotoresComponent } from './motores/motores.component';

const routes: Routes = [
  {path:'motor', component: MotorComponent},
  {path:'motores', component: MotoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
