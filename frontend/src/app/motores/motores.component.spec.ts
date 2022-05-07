import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoresComponent } from './motores.component';

describe('MotoresComponent', () => {
  let component: MotoresComponent;
  let fixture: ComponentFixture<MotoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
