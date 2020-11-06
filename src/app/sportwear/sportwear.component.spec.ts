import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportwearComponent } from './sportwear.component';

describe('SportwearComponent', () => {
  let component: SportwearComponent;
  let fixture: ComponentFixture<SportwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
