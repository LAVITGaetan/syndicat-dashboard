import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentEditComponent } from './adherent-edit.component';

describe('AdherentEditComponent', () => {
  let component: AdherentEditComponent;
  let fixture: ComponentFixture<AdherentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdherentEditComponent]
    });
    fixture = TestBed.createComponent(AdherentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
