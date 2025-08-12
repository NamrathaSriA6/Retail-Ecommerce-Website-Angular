import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbiComponent } from './corbi.component';

describe('CorbiComponent', () => {
  let component: CorbiComponent;
  let fixture: ComponentFixture<CorbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorbiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
