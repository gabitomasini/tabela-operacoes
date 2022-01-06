import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagOperacoesComponent } from './pag-operacoes/pag-operacoes.component';
import { FiltroOperacoesComponent } from './filtro-operacoes/filtro-operacoes.component';
import { TabelaOperacoesComponent } from './tabela-operacoes/tabela-operacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PagOperacoesComponent,
    FiltroOperacoesComponent,
    TabelaOperacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
