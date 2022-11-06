import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPagamentosAlunoComponent } from './meus-pagamentos-aluno.component';

describe('MeusPagamentosAlunoComponent', () => {
  let component: MeusPagamentosAlunoComponent;
  let fixture: ComponentFixture<MeusPagamentosAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusPagamentosAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusPagamentosAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
