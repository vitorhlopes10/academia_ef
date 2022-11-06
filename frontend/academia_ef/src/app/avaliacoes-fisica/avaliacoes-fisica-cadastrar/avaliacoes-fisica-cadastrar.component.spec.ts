import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicaCadastrarComponent } from './avaliacoes-fisica-cadastrar.component';

describe('AvaliacoesFisicaCadastrarComponent', () => {
  let component: AvaliacoesFisicaCadastrarComponent;
  let fixture: ComponentFixture<AvaliacoesFisicaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesFisicaCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
