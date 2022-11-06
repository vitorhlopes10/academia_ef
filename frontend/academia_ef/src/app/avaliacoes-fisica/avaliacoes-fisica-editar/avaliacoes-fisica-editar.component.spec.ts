import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicaEditarComponent } from './avaliacoes-fisica-editar.component';

describe('AvaliacoesFisicaEditarComponent', () => {
  let component: AvaliacoesFisicaEditarComponent;
  let fixture: ComponentFixture<AvaliacoesFisicaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesFisicaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
