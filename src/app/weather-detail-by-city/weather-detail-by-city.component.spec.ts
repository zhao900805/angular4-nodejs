import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailByCityComponent } from './weather-detail-by-city.component';

describe('WeatherDetailByCityComponent', () => {
  let component: WeatherDetailByCityComponent;
  let fixture: ComponentFixture<WeatherDetailByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
