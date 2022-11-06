import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesFisicaComponent } from './avaliacoes-fisica.component';

describe('AvaliacoesFisicaComponent', () => {
  let component: AvaliacoesFisicaComponent;
  let fixture: ComponentFixture<AvaliacoesFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesFisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
