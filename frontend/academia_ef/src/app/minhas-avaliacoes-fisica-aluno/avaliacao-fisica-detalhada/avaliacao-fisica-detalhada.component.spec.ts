import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoFisicaDetalhadaComponent } from './avaliacao-fisica-detalhada.component';

describe('AvaliacaoFisicaDetalhadaComponent', () => {
  let component: AvaliacaoFisicaDetalhadaComponent;
  let fixture: ComponentFixture<AvaliacaoFisicaDetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoFisicaDetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoFisicaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
