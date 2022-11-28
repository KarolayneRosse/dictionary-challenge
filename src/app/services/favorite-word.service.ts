import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteWordService {
  template = {
    user: '',
    words: []
  }

  constructor() { }

  saveFavoriteWord(){

  }

  getFavoriteWord(){}
}
