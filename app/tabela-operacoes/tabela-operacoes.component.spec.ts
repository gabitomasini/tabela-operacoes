import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOperacoesComponent } from './tabela-operacoes.component';

describe('TabelaOperacoesComponent', () => {
  let component: TabelaOperacoesComponent;
  let fixture: ComponentFixture<TabelaOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaOperacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
