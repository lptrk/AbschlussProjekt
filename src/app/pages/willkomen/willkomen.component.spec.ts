import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillkomenComponent } from './willkomen.component';

describe('WillkomenComponent', () => {
  let component: WillkomenComponent;
  let fixture: ComponentFixture<WillkomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillkomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillkomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
