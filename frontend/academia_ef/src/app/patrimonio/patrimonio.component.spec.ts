import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioComponent } from './patrimonio.component';

describe('PatrimonioComponent', () => {
  let component: PatrimonioComponent;
  let fixture: ComponentFixture<PatrimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
