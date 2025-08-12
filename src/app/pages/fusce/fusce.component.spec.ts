import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusceComponent } from './fusce.component';

describe('FusceComponent', () => {
  let component: FusceComponent;
  let fixture: ComponentFixture<FusceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
