import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandataireEditComponent } from './mandataire-edit.component';

describe('MandataireEditComponent', () => {
  let component: MandataireEditComponent;
  let fixture: ComponentFixture<MandataireEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandataireEditComponent]
    });
    fixture = TestBed.createComponent(MandataireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
