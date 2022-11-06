import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosCadastrarComponent } from './funcionarios-cadastrar.component';

describe('FuncionariosCadastrarComponent', () => {
  let component: FuncionariosCadastrarComponent;
  let fixture: ComponentFixture<FuncionariosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
