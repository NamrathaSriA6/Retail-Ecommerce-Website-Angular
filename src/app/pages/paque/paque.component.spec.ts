import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueComponent } from './paque.component';

describe('PaqueComponent', () => {
  let component: PaqueComponent;
  let fixture: ComponentFixture<PaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
