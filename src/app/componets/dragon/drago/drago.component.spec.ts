import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoComponent } from './drago.component';

describe('DragoComponent', () => {
  let component: DragoComponent;
  let fixture: ComponentFixture<DragoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
