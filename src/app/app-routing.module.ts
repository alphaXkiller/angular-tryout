import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ItemDetailComponent } from './item.component'
import { ItemsComponent }      from './items.component'

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'todo/:id', component: ItemDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
