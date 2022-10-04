import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProdutosPage } from '../produtos/produtos.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  pushHomePage(){
    this.router.navigate(['/home']);
  }

  async openProdutosModal(){
    let modal = await this.modalController.create({
      component: ProdutosPage,
      cssClass: 'full-modal'
    });
    await modal.present();
  }

}
