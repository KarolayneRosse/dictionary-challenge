import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient,
  ) { }

  createProduct(data){
    return this.http.post(environment.apiUrl + "product/create",data)
  }

  getProducts(){
    return this.http.get(environment.apiUrl + 'product')
  }
}
