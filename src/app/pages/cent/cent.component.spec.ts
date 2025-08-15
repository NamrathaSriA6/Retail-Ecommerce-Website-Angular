import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentComponent } from './cent.component';

describe('CentComponent', () => {
  let component: CentComponent;
  let fixture: ComponentFixture<CentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
