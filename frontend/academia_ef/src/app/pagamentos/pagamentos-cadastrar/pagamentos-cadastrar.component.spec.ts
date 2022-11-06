import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosCadastrarComponent } from './pagamentos-cadastrar.component';

describe('PagamentosCadastrarComponent', () => {
  let component: PagamentosCadastrarComponent;
  let fixture: ComponentFixture<PagamentosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
