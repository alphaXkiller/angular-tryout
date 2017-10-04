import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule }        from '@angular/router'

import { AppComponent }        from './app.component';
import { ItemDetailComponent } from './item.component'
import { ItemsComponent }      from './items.component'
import { TodoService }         from './app.service'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
