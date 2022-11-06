import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosCadastrarComponent } from './alunos-cadastrar.component';

describe('AlunosCadastrarComponent', () => {
  let component: AlunosCadastrarComponent;
  let fixture: ComponentFixture<AlunosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
