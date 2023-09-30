import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFindComponent } from './people-find.component';

describe('PeopleFindComponent', () => {
  let component: PeopleFindComponent;
  let fixture: ComponentFixture<PeopleFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleFindComponent]
    });
    fixture = TestBed.createComponent(PeopleFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
