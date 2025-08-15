import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedgownComponent } from './redgown.component';

describe('RedgownComponent', () => {
  let component: RedgownComponent;
  let fixture: ComponentFixture<RedgownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedgownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedgownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
