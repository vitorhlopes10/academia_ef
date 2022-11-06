import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosDetalhesComponent } from './treinos-detalhes.component';

describe('TreinosDetalhesComponent', () => {
  let component: TreinosDetalhesComponent;
  let fixture: ComponentFixture<TreinosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinosDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
