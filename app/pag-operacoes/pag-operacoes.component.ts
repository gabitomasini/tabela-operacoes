import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pag-operacoes',
  templateUrl: './pag-operacoes.component.html',
  styleUrls: ['./pag-operacoes.component.css']
})
export class PagOperacoesComponent implements OnInit {

  // @Input(): buscar;

  buscaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private formg: FormGroup) { }

  ngOnInit(): void {
    this.buscaForm = this.formBuilder.group({
      codigoCliente: ['', Validators.required],
      numeroOperacao: ['', Validators.required],
      infosConta: ['', Validators.required],
    })

    // this.buscaForm = new FormGroup({
    //   codigoCliente: new FormControl(),
    //   numeroOperacao: new FormControl(),
    //   infosConta: new FormControl(),
    // })
  }



  codigoCliente(){
    this.buscaForm.controls['codigoCliente'].enable();
    this.buscaForm.controls['numeroOperacao'].disable();
    this.buscaForm.controls['infosConta'].disable();
  }

  numeroOperacao(){
    this.buscaForm.controls['codigoCliente'].disable();
    this.buscaForm.controls['numeroOperacao'].enable();
    this.buscaForm.controls['infosConta'].disable();
  }

  infosConta(){
    this.buscaForm.controls['codigoCliente'].disable();
    this.buscaForm.controls['numeroOperacao'].disable();
    this.buscaForm.controls['infosConta'].enable();
  }

  habilitarCampos(){
    this.buscaForm.controls['codigoCliente'].enable();
    this.buscaForm.controls['numeroOperacao'].enable();
    this.buscaForm.controls['infosConta'].enable();
  }



}
