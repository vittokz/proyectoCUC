import { Item } from './../../modelos/item-model';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/service/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  listItems: Item[];
  cols: any[];
  constructor(private itemsService: ItemsService, private ruta: Router) {
    this.cargarCabecerasCol();
    this.cargarItems();
   }

  ngOnInit(): void {
  }

  cargarCabecerasCol(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'about', header: 'About' },
      { field: 'accesUrl', header: 'AccesUrl' },
      { field: 'title', header: 'Title' }
  ];
  }

  cargarItems(){
       this.listItems = this.itemsService.getItemsLocalStorage();
       console.log(JSON.stringify(this.listItems));
   }

   deleteItem(idItem: number){
     this.itemsService.eliminarItemLocalStorage(idItem);
     this.cargarItems();
   }

}
