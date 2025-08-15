import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress6Component } from './dress6.component';

describe('Dress6Component', () => {
  let component: Dress6Component;
  let fixture: ComponentFixture<Dress6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dress6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
