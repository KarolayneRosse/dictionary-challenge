import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import wordList from '../../wordList.json';
import { AuthService } from '../services/auth.service';
import { HomeService } from './home.service';
import { ShowWordComponent } from './show-word/show-word.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  holdWords;
  load = false;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private modalCtrl: ModalController,
    private auth: AuthService
  ) {}

  ngOnInit(){
    this.holdWords = wordList;
  }

  getWord(word){
    if (!this.load) {
      this.load = true;

      this.homeService.getWord(word).subscribe((res)=>{
        // console.log(res[0])
        this.openWordModal(res[0], word)
        this.load = false;
      }, (error)=>{
        console.log(error)
        this.load = false;
      })
    }
  }

  async openWordModal(data, title){
    let modal = await this.modalCtrl.create({
      component: ShowWordComponent,
      cssClass: 'left-modal',
      componentProps: {
        data: data,
        title: title
      }
    })

    await modal.present();
  }

  logout(){
    this.auth.logout();
  }
}
