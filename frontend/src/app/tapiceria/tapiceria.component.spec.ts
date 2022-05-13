import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapiceriaComponent } from './tapiceria.component';

describe('TapiceriaComponent', () => {
  let component: TapiceriaComponent;
  let fixture: ComponentFixture<TapiceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapiceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapiceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
