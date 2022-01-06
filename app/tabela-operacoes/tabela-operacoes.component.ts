import { TabelaService } from '../../services/tabela.service';
import { respostaApi } from '../../models/operacao.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-operacoes',
  templateUrl: './tabela-operacoes.component.html',
  styleUrls: ['./tabela-operacoes.component.css']
})
export class TabelaOperacoesComponent implements OnInit {

  @Input()
  tabela = {} as respostaApi;
  infosTabela!: respostaApi;

  constructor(private tabelaService: TabelaService) { }

  ngOnInit() {
    this.tabelaService.getTabela().subscribe((infosTabela: respostaApi) => {

      this.infosTabela = infosTabela;

      console.log(infosTabela);

    })
  }

  // buscar(input){
  //   return this.infosTabela.filter(val => val.PATRIMONIO.indexOf(input.toLowerCase())>=0);
  // }

}
