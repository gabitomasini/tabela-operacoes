import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagOperacoesComponent } from './pag-operacoes.component';

describe('PagOperacoesComponent', () => {
  let component: PagOperacoesComponent;
  let fixture: ComponentFixture<PagOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagOperacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
