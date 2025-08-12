import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedtempuComponent } from './sedtempu.component';

describe('SedtempuComponent', () => {
  let component: SedtempuComponent;
  let fixture: ComponentFixture<SedtempuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedtempuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedtempuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
