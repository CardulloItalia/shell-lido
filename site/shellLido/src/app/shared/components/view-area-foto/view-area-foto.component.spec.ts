import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAreaFotoComponent } from './view-area-foto.component';

describe('ViewAreaFotoComponent', () => {
  let component: ViewAreaFotoComponent;
  let fixture: ComponentFixture<ViewAreaFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAreaFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAreaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
