import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule }        from '@angular/router'

import { AppComponent }        from './app.component';
import { ItemDetailComponent } from './item.component'
import { ItemsComponent }      from './items.component'
import { TodoService }         from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ItemsComponent
      },
      {
        path: 'todo/:id',
        component: ItemDetailComponent
      }
    ]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
