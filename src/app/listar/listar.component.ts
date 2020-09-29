import { Item } from './../modelos/item-model';
import { ItemApi } from './../modelos/itemApi-modelo';

import { ItemsService } from './../service/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  listItems: Item[];
  cols: any[];
  constructor(private itemsService: ItemsService) { 
    this.cargarItems();
    this.cargarCabeceras();
  }

  ngOnInit(): void {
  }

  cargarCabeceras(){
    this.cols = [
      { field: '_about', header: 'About' },
      { field: 'title', header: 'Title' },
      { field: 'accessURL', header: 'AccesUrl' }
  ];
  }

  // cargo los items de la api
  cargarItems(){
      this.itemsService.getItems().subscribe(
        data => {
            this.listItems = data.result.items;
         }
      );
  }

}
