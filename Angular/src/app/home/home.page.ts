import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alunos: any = [
    {nome: "Mãe Merenda", email: "nazaretedesco@resident.evil"}
    {nome: "Jéqui Baiquer", email: "tiodogedeon@resident.evi"}
  ];

  titulo : string = "Listagem de Aluno"
  subtitulo : string = "Sistema Integrado de gestão"

  constructor() {
    fetch("http://127.0.0.1:8000/aluno/index")
    .then(resp => resp.json)
    .then(resp => {
      this.alunos = resp;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      console.log("Requisição Finalizada")
    })
  }
}
