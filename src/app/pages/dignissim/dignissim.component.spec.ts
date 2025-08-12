import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DignissimComponent } from './dignissim.component';

describe('DignissimComponent', () => {
  let component: DignissimComponent;
  let fixture: ComponentFixture<DignissimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DignissimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DignissimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
