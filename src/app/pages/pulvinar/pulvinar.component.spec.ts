import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulvinarComponent } from './pulvinar.component';

describe('PulvinarComponent', () => {
  let component: PulvinarComponent;
  let fixture: ComponentFixture<PulvinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PulvinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulvinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
