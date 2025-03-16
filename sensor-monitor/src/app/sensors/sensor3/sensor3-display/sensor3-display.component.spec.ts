import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor3DisplayComponent } from './sensor3-display.component';

describe('Sensor3DisplayComponent', () => {
  let component: Sensor3DisplayComponent;
  let fixture: ComponentFixture<Sensor3DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sensor3DisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sensor3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
