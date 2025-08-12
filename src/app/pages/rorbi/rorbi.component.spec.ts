import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RorbiComponent } from './rorbi.component';

describe('RorbiComponent', () => {
  let component: RorbiComponent;
  let fixture: ComponentFixture<RorbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RorbiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RorbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
