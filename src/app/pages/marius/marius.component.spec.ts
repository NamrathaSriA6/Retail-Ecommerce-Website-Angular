import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariusComponent } from './marius.component';

describe('MariusComponent', () => {
  let component: MariusComponent;
  let fixture: ComponentFixture<MariusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MariusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
