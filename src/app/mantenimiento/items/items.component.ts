import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/service/items.service';
import { Item } from '../../modelos/item-model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  registro: FormGroup;
  nuevoItem: Item = new Item();
  editarItem: Item = new Item();
  editarItemSelec: Item [];
  opcion : any;
  envioForm: string= '';
  envioFormEditar: string = '';
 
  posicion : number;

  constructor(private formBuild: FormBuilder, private rutaActiva: ActivatedRoute,private itemsService: ItemsService) { 
    this.opcion = this.rutaActiva.snapshot.params.id;
    this.crearFormulario(); // creo el formulario
    if(this.opcion!="new"){
       this.editarItems(this.opcion);
    }
  }

  ngOnInit(): void {
  }

  editar(){
    this.editarItem = this.registro.value as Item;
    this.itemsService.editarItemLocalStorage(this.editarItem,this.posicion);
    this.envioFormEditar="ok";
    console.log(this.editarItem);
  }

  editarItems(idItem: number){
      this.editarItemSelec = this.itemsService.getItemsLocalStorage().filter(item =>{
        return item.id == idItem;
      });
      this.posicion = idItem;
      this.registro.get('id').setValue(this.editarItemSelec[0].id);
      this.registro.get('about').setValue(this.editarItemSelec[0].about);
      this.registro.get('accesUrl').setValue(this.editarItemSelec[0].accesUrl);
      this.registro.get('title').setValue(this.editarItemSelec[0].title);
  }
  
  // creo el formulario de registro con los campos solicitados
  crearFormulario(){
    this.registro = this.formBuild.group({
      id: [''],
      about: ['', Validators.required],
      accesUrl: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  // adiciono al arreglo tipo Item los registros nuevos
  agregarItem(){
    this.nuevoItem = this.registro.value as Item;
    this.itemsService.addLocalStorage(this.nuevoItem);
    this.envioForm = 'ok';
    this.registro.reset();
  }
}
