import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroOperacoesComponent } from './filtro-operacoes.component';

describe('FiltroOperacoesComponent', () => {
  let component: FiltroOperacoesComponent;
  let fixture: ComponentFixture<FiltroOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroOperacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
