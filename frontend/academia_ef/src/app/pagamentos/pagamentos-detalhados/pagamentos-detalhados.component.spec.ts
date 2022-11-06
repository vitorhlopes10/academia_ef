import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosDetalhadosComponent } from './pagamentos-detalhados.component';

describe('PagamentosDetalhadosComponent', () => {
  let component: PagamentosDetalhadosComponent;
  let fixture: ComponentFixture<PagamentosDetalhadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosDetalhadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentosDetalhadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
