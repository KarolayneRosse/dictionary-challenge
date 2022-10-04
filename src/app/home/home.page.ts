import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categoriesMock = [
    {
      image: 'https://picsum.photos/200/300',
      name: 'Entradas',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Refrigerantes',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Sucos',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Self Service',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Salgados',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Doces',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Massas',
    },
  ];

  constructor(
    private router: Router
  ) {}

  pushSettingsPage(){
    this.router.navigate(['/settings']);
  }

}
