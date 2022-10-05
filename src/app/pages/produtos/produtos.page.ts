import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarProdutoPage } from './editar-produto/editar-produto.page';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss()
  }

  async openEditModal(){
    let modal = await this.modalController.create({
      component: EditarProdutoPage,
      cssClass: 'left-modal'
    })

    await modal.present();
  }

}
