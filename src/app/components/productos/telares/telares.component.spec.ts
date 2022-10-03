import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaresComponent } from './telares.component';

describe('TelaresComponent', () => {
  let component: TelaresComponent;
  let fixture: ComponentFixture<TelaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
