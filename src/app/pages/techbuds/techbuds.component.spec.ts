import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechbudsComponent } from './techbuds.component';

describe('TechbudsComponent', () => {
  let component: TechbudsComponent;
  let fixture: ComponentFixture<TechbudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechbudsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechbudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
