import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandataireComponent } from './mandataire.component';

describe('MandataireComponent', () => {
  let component: MandataireComponent;
  let fixture: ComponentFixture<MandataireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandataireComponent]
    });
    fixture = TestBed.createComponent(MandataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
