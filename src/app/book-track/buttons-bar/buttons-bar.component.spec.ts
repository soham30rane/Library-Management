import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBarComponent } from './buttons-bar.component';

describe('ButtonsBarComponent', () => {
  let component: ButtonsBarComponent;
  let fixture: ComponentFixture<ButtonsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsBarComponent]
    });
    fixture = TestBed.createComponent(ButtonsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
