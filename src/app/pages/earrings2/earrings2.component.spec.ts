import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Earrings2Component } from './earrings2.component';

describe('Earrings2Component', () => {
  let component: Earrings2Component;
  let fixture: ComponentFixture<Earrings2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Earrings2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Earrings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
