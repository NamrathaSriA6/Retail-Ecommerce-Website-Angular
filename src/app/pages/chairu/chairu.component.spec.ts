import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairuComponent } from './chairu.component';

describe('ChairuComponent', () => {
  let component: ChairuComponent;
  let fixture: ComponentFixture<ChairuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChairuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
