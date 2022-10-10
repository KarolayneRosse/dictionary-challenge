import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarProdutoPage } from './editar-produto/editar-produto.page';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produtos = [];

  constructor(
    private modalController: ModalController,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.getProdutos()
  }

  dismissModal(){
    this.modalController.dismiss()
  }

  async openEditModal(){
    let modal = await this.modalController.create({
      component: EditarProdutoPage,
      cssClass: 'left-modal',
      componentProps: {
        edit: false
      }
    })

    await modal.present();
  }

  getProdutos(){
    this.produtoService.getProducts().subscribe((res)=>{
      this.produtos = res[0]
      console.log(res[0])
    }, (error)=>{
      console.log(error)
    })
  }

}
