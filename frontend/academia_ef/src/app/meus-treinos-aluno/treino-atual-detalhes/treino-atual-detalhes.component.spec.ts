import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoAtualDetalhesComponent } from './treino-atual-detalhes.component';

describe('TreinoAtualDetalhesComponent', () => {
  let component: TreinoAtualDetalhesComponent;
  let fixture: ComponentFixture<TreinoAtualDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoAtualDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoAtualDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
