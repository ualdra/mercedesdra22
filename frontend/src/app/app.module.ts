import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MotorComponent } from './motor/motor.component';
import { MotoresComponent } from './motores/motores.component';
import { ConfiguracionTarjetaComponent } from './configuracion-tarjeta/configuracion-tarjeta.component';
import { TapiceriaComponent } from './tapiceria/tapiceria.component';
import { CarComponent } from './car/coche.component';
import { GarageComponent } from './garage/garage.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { PinturaComponent } from './pintura/pintura.component';
<<<<<<< HEAD
import { AsientoComponent } from './asiento/asiento.component';
=======
import { LlantaComponent } from './llanta/llanta.component';
>>>>>>> 7db9923bff5b73f4c24399d325d12ed98a6abc16


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    MotorComponent,
    MotoresComponent,
    ConfiguracionTarjetaComponent,
    TapiceriaComponent,
    CarComponent,
    GarageComponent,
    ContentComponent,
    MenuComponent,
    ConfiguratorComponent,
    PinturaComponent,
<<<<<<< HEAD
    AsientoComponent
=======
    LlantaComponent
>>>>>>> 7db9923bff5b73f4c24399d325d12ed98a6abc16
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
