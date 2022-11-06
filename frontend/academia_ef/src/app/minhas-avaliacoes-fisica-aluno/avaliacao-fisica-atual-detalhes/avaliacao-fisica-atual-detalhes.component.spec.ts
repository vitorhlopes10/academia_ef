import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoFisicaAtualDetalhesComponent } from './avaliacao-fisica-atual-detalhes.component';

describe('AvaliacaoFisicaAtualDetalhesComponent', () => {
  let component: AvaliacaoFisicaAtualDetalhesComponent;
  let fixture: ComponentFixture<AvaliacaoFisicaAtualDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoFisicaAtualDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoFisicaAtualDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
