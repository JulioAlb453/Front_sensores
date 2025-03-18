import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor1DisplayComponent } from './sensor1-display.component';

describe('Sensor1DisplayComponent', () => {
  let component: Sensor1DisplayComponent;
  let fixture: ComponentFixture<Sensor1DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sensor1DisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sensor1DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
