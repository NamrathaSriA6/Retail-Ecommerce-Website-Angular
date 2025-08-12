import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackgownComponent } from './blackgown.component';

describe('BlackgownComponent', () => {
  let component: BlackgownComponent;
  let fixture: ComponentFixture<BlackgownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackgownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackgownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
