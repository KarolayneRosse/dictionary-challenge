import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {
  @Input() edit: boolean;

  productForm = {
    name: '',
  }

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss()
  }

}
