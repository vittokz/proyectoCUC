import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../modelos/item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url: string = 'https://datos.gob.es/apidata/catalog/distribution';
  public listaItems : Item[];
 
  constructor(private http: HttpClient) { }

  // recupero items de la api
  getItems(): Observable<any[]>{
     return this.http.get<any[]>(this.url);
  }

  // adicionar item a localstorage
  addLocalStorage(nuevoItem: Item){
    const itemAnteriores: Item[] = this.getItemsLocalStorage();
    nuevoItem.id = itemAnteriores.length + 1;
    itemAnteriores.push(nuevoItem);
    localStorage.setItem('items', JSON.stringify(itemAnteriores));
  }

  // recuperar item locales
  getItemsLocalStorage(): Item[]{
   const totalItems: Item[] = JSON.parse(localStorage.getItem('items'));
     if(totalItems == null) {
        return Array<Item>();
     }
     return totalItems;
 }

  editarItemLocalStorage(itemEditar: Item,idItem: number){
    const itemAnteriores: Item[] = this.getItemsLocalStorage();
    itemAnteriores.splice((idItem-1),1,itemEditar);
    localStorage.setItem('items', JSON.stringify(itemAnteriores));
  }

  eliminarItemLocalStorage(idItem: number){
    const itemAnteriores: Item[] = this.getItemsLocalStorage();
    itemAnteriores.splice((idItem-1),1);
    localStorage.setItem('items', JSON.stringify(itemAnteriores));
  }

}
