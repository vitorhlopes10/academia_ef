import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicaDetalhesComponent } from './avaliacoes-fisica-detalhes.component';

describe('AvaliacoesFisicaDetalhesComponent', () => {
  let component: AvaliacoesFisicaDetalhesComponent;
  let fixture: ComponentFixture<AvaliacoesFisicaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesFisicaDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
