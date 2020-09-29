import { InterceptorService } from './service/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ItemsComponent } from './mantenimiento/items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemComponent } from './mantenimiento/list-item/list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    ItemsComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    AppRoutingModule,
    PanelModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
