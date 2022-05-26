import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { GarageComponent } from './garage/garage.component';
import { MotorComponent } from './motor/motor.component';
import { MotoresComponent } from './motores/motores.component';
import { PinturaComponent } from './pintura/pintura.component';
import { LlantaComponent } from './llanta/llanta.component';
import { TapiceriaComponent } from './tapiceria/tapiceria.component';
<<<<<<< HEAD
import { GarageComponent } from './garage/garage.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
=======
// import { AsientoComponent } from './asiento/asiento.component';

>>>>>>> 7db9923bff5b73f4c24399d325d12ed98a6abc16
import { ConfiguratorComponent } from './configurator/configurator.component';

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'home',component:ContentComponent},
  {path: 'menu', component:MenuComponent},
  {path:'configurator/:id',component:ConfiguratorComponent},
  {path:'garage', component:GarageComponent},
  {path:'motor', component: MotorComponent},
  {path:'motores', component: MotoresComponent},
  {path:'pintura', component: PinturaComponent},
  {path:'llanta', component:LlantaComponent},
  {path:'tapiceria', component:TapiceriaComponent},
<<<<<<< HEAD
  {path:'',component:ContentComponent},
  {path:'home',component:ContentComponent},
  {path:'configurator/:id',component:ConfiguratorComponent},
  {path:'garage', component:GarageComponent},
  {path: 'menu', component:MenuComponent}

=======
  // {path:'asiento', component: AsientoComponent}
>>>>>>> 7db9923bff5b73f4c24399d325d12ed98a6abc16
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
