import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosPage } from './produtos.page';
import { EditarProdutoPageModule } from './editar-produto/editar-produto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProdutoPageModule
  ],
  declarations: [ProdutosPage]
})
export class ProdutosPageModule {}
