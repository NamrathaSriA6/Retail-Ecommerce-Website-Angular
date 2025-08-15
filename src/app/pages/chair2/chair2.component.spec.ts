import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chair2Component } from './chair2.component';

describe('Chair2Component', () => {
  let component: Chair2Component;
  let fixture: ComponentFixture<Chair2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chair2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chair2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
