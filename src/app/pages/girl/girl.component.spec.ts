import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlComponent } from './girl.component';

describe('GirlComponent', () => {
  let component: GirlComponent;
  let fixture: ComponentFixture<GirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GirlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
