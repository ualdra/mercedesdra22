import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { GarageComponent } from './garage/garage.component';
import { MotorComponent } from './motor/motor.component';
import { PinturaComponent } from './pintura/pintura.component';
import { LlantaComponent } from './llanta/llanta.component';
import { TapiceriaComponent } from './tapiceria/tapiceria.component';
import { AsientoComponent } from './asiento/asiento.component';

import { ConfiguratorComponent } from './configurator/configurator.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'home', component: ContentComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'configurator', component: ConfiguratorComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'motor', component: MotorComponent },
  { path: 'pintura', component: PinturaComponent },
  { path: 'llanta', component: LlantaComponent },
  { path: 'tapiceria', component: TapiceriaComponent },
  { path: 'asiento', component: AsientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
