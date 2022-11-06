import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusTreinosAlunoComponent } from './meus-treinos-aluno.component';

describe('MeusTreinosAlunoComponent', () => {
  let component: MeusTreinosAlunoComponent;
  let fixture: ComponentFixture<MeusTreinosAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusTreinosAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusTreinosAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
