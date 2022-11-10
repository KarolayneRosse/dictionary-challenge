import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-word',
  templateUrl: './show-word.component.html',
  styleUrls: ['./show-word.component.scss'],
})
export class ShowWordComponent implements OnInit {
  @Input() data: any;
  @Input() title: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
