import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAvaliacoesFisicaAlunoComponent } from './minhas-avaliacoes-fisica-aluno.component';

describe('MinhasAvaliacoesFisicaAlunoComponent', () => {
  let component: MinhasAvaliacoesFisicaAlunoComponent;
  let fixture: ComponentFixture<MinhasAvaliacoesFisicaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasAvaliacoesFisicaAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasAvaliacoesFisicaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
