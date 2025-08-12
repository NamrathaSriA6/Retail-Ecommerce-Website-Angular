import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetComponent } from './headset.component';

describe('HeadsetComponent', () => {
  let component: HeadsetComponent;
  let fixture: ComponentFixture<HeadsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
