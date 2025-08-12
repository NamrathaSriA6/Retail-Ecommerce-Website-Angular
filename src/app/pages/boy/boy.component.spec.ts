import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyComponent } from './boy.component';

describe('BoyComponent', () => {
  let component: BoyComponent;
  let fixture: ComponentFixture<BoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
