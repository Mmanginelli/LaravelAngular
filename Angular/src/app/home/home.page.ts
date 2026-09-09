import { Component } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any;

  constructor( 
    public crudService: CrudService,
    public messageService: MessageService
  ){  }


  listarProdutos(){
    this.crudService.get('produtos').subscribe(produtos => {
      this.produtos = produtos;
      this.messageService.show('Todos os produtos foram carregados!');
    });
  }

  removerProduto(id: any){
    this.crudService.delete(`produtos/${id}`).subscribe(resp => {
      console.log(resp);
      this.messageService.show(`O produto com id = ${id} foi removido!`);
      this.listarProdutos()
    })
  }

  


}
