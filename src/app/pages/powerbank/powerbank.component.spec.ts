import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbankComponent } from './powerbank.component';

describe('PowerbankComponent', () => {
  let component: PowerbankComponent;
  let fixture: ComponentFixture<PowerbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerbankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
