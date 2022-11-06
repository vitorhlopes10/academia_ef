import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoDetalheComponent } from './pagamento-detalhe.component';

describe('PagamentoDetalheComponent', () => {
  let component: PagamentoDetalheComponent;
  let fixture: ComponentFixture<PagamentoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
