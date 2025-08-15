import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress7Component } from './dress7.component';

describe('Dress7Component', () => {
  let component: Dress7Component;
  let fixture: ComponentFixture<Dress7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dress7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
