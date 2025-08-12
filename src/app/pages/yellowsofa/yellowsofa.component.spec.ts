import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowsofaComponent } from './yellowsofa.component';

describe('YellowsofaComponent', () => {
  let component: YellowsofaComponent;
  let fixture: ComponentFixture<YellowsofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YellowsofaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowsofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
