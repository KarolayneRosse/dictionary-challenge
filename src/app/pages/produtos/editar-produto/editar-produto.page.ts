import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/utils/toast.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {
  @Input() edit: boolean;

  productForm = {
    name: '',
    price: 0,
    code: Number
  }

  constructor(
    private modalController: ModalController,
    private produtoService: ProdutoService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss()
  }

  async submitProduct(){
    this.produtoService.createProduct(this.productForm).subscribe(()=>{
      this.toastService.successToast('Produto criado com sucesso!')
      this.dismissModal()
    }, ()=>{
      this.toastService.errorToast('Erro ao criar o produto :(')
    })
  }

}
