import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosCadastrarComponent } from './treinos-cadastrar.component';

describe('TreinosCadastrarComponent', () => {
  let component: TreinosCadastrarComponent;
  let fixture: ComponentFixture<TreinosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinosCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
