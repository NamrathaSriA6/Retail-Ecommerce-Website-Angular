import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariusComponent } from './varius.component';

describe('VariusComponent', () => {
  let component: VariusComponent;
  let fixture: ComponentFixture<VariusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
