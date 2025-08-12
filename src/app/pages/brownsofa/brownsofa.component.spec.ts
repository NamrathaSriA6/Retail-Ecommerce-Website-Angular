import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownsofaComponent } from './brownsofa.component';

describe('BrownsofaComponent', () => {
  let component: BrownsofaComponent;
  let fixture: ComponentFixture<BrownsofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrownsofaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrownsofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
