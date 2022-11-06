import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosDetalhesComponent } from './pagamentos-detalhes.component';

describe('PagamentosDetalhesComponent', () => {
  let component: PagamentosDetalhesComponent;
  let fixture: ComponentFixture<PagamentosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
