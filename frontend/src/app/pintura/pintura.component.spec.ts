import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturaComponent } from './pintura.component';

describe('PinturaComponent', () => {
  let component: PinturaComponent;
  let fixture: ComponentFixture<PinturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
