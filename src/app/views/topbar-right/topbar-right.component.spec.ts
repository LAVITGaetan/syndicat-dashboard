import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarRightComponent } from './topbar-right.component';

describe('TopbarRightComponent', () => {
  let component: TopbarRightComponent;
  let fixture: ComponentFixture<TopbarRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarRightComponent]
    });
    fixture = TestBed.createComponent(TopbarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
