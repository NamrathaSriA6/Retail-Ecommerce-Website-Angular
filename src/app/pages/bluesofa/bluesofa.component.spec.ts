import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluesofaComponent } from './bluesofa.component';

describe('BluesofaComponent', () => {
  let component: BluesofaComponent;
  let fixture: ComponentFixture<BluesofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BluesofaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluesofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
