import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule }        from '@angular/router'

import { AppComponent }        from './app.component';
import { TodoComponent }       from './todo.component'
import { CompletedComponent }  from './completed.component'
import { ItemDetailComponent } from './item.component'
import { TodoService }         from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TodoComponent
      },
      {
        path: 'completed',
        component: CompletedComponent
      },
      {
        path: 'completed/:id',
        component: ItemDetailComponent
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
