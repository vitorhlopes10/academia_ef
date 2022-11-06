import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioCadastrarComponent } from './patrimonio-cadastrar.component';

describe('PatrimonioCadastrarComponent', () => {
  let component: PatrimonioCadastrarComponent;
  let fixture: ComponentFixture<PatrimonioCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrimonioCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrimonioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
