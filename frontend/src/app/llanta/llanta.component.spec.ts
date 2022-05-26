import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlantaComponent } from './llanta.component';

describe('LlantaComponent', () => {
  let component: LlantaComponent;
  let fixture: ComponentFixture<LlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
