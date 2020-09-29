import { ListItemComponent } from './mantenimiento/list-item/list-item.component';
import { ItemsComponent } from './mantenimiento/items/items.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'listar-items', component: ListItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
