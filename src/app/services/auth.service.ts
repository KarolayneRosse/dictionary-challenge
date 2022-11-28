import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { ToastService } from '../utils/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private toast: ToastService
  ) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then((res)=>{
      localStorage.setItem('uid', res.user.uid)
      if(!localStorage.getItem(res.user.uid)){
        localStorage.setItem(res.user.uid, '')
      }
      this.router.navigate(['/home'])
    }, err =>{
      this.toast.errorToast('The email or password was wrong. Try again!')
    })
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
      this.toast.successToast('Account created!')
      this.router.navigate(['/login'])
    }, err =>{
      this.toast.errorToast(err.message)
    })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }, err =>{
      this.toast.errorToast(err.message)
    })
  }
}
