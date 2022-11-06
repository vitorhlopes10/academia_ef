import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosEditarComponent } from './pagamentos-editar.component';

describe('PagamentosEditarComponent', () => {
  let component: PagamentosEditarComponent;
  let fixture: ComponentFixture<PagamentosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
