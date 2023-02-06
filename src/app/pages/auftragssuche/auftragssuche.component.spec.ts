import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragssucheComponent } from './auftragssuche.component';

describe('AuftragssucheComponent', () => {
  let component: AuftragssucheComponent;
  let fixture: ComponentFixture<AuftragssucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragssucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragssucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
