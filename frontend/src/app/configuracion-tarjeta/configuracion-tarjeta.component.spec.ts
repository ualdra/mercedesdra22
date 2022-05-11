import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionTarjetaComponent } from './configuracion-tarjeta.component';

describe('ConfiguracionTarjetaComponent', () => {
  let component: ConfiguracionTarjetaComponent;
  let fixture: ComponentFixture<ConfiguracionTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
