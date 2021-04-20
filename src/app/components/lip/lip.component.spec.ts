import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipComponent } from './lip.component';

describe('LipComponent', () => {
  let component: LipComponent;
  let fixture: ComponentFixture<LipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
