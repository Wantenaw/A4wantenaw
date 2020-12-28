import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceImagesComponent } from './province-images.component';

describe('ProvinceImagesComponent', () => {
  let component: ProvinceImagesComponent;
  let fixture: ComponentFixture<ProvinceImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
