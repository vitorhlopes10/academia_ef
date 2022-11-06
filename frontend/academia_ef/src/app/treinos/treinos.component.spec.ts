import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosComponent } from './treinos.component';

describe('TreinosComponent', () => {
  let component: TreinosComponent;
  let fixture: ComponentFixture<TreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
