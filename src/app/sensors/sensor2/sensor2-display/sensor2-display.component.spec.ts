import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor2DisplayComponent } from './sensor2-display.component';

describe('Sensor2DisplayComponent', () => {
  let component: Sensor2DisplayComponent;
  let fixture: ComponentFixture<Sensor2DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sensor2DisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sensor2DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
