import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceCapitalsComponent } from './province-capitals.component';

describe('ProvinceCapitalsComponent', () => {
  let component: ProvinceCapitalsComponent;
  let fixture: ComponentFixture<ProvinceCapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceCapitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
