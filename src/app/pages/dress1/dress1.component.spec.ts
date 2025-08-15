import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress1Component } from './dress1.component';

describe('Dress1Component', () => {
  let component: Dress1Component;
  let fixture: ComponentFixture<Dress1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dress1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
