import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoDetalhadoComponent } from './treino-detalhado.component';

describe('TreinoDetalhadoComponent', () => {
  let component: TreinoDetalhadoComponent;
  let fixture: ComponentFixture<TreinoDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoDetalhadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
