import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLine2Component } from './contact-line2.component';

describe('ContactLine2Component', () => {
  let component: ContactLine2Component;
  let fixture: ComponentFixture<ContactLine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLine2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
