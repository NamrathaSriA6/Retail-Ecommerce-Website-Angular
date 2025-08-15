import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chair3Component } from './chair3.component';

describe('Chair3Component', () => {
  let component: Chair3Component;
  let fixture: ComponentFixture<Chair3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chair3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chair3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
