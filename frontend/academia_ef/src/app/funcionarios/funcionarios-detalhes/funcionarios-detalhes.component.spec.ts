import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDetalhesComponent } from './funcionarios-detalhes.component';

describe('FuncionariosDetalhesComponent', () => {
  let component: FuncionariosDetalhesComponent;
  let fixture: ComponentFixture<FuncionariosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
