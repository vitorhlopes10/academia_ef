import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosEditarComponent } from './treinos-editar.component';

describe('TreinosEditarComponent', () => {
  let component: TreinosEditarComponent;
  let fixture: ComponentFixture<TreinosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
