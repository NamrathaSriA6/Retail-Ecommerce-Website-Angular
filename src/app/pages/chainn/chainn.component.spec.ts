import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainnComponent } from './chainn.component';

describe('ChainnComponent', () => {
  let component: ChainnComponent;
  let fixture: ComponentFixture<ChainnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
