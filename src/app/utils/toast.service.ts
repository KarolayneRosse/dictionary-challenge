import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async successToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 5000,
      color: 'success'
    })

    await toast.present()
  }

  async errorToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 5000,
      color: 'success'
    })

    await toast.present()
  }
}
