import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ShowWordComponent } from './show-word.component';



@NgModule({
  declarations: [ShowWordComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ShowWordModule { }
