import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgujasComponent } from './agujas.component';

describe('AgujasComponent', () => {
  let component: AgujasComponent;
  let fixture: ComponentFixture<AgujasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgujasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgujasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
