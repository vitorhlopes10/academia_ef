import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioEditarComponent } from './patrimonio-editar.component';

describe('PatrimonioEditarComponent', () => {
  let component: PatrimonioEditarComponent;
  let fixture: ComponentFixture<PatrimonioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimonioEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimonioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
