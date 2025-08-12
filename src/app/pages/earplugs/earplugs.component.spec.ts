import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarplugsComponent } from './earplugs.component';

describe('EarplugsComponent', () => {
  let component: EarplugsComponent;
  let fixture: ComponentFixture<EarplugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarplugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarplugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
