import { Component, OnInit }        from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location }                 from '@angular/common'
import 'rxjs/add/operator/switchMap'

import { Item }        from './data-model'
import { TodoService } from './app.service'

@Component({
  selector: 'item-detail',
  templateUrl: './item.component.html'
})

export class ItemDetailComponent implements OnInit{
  item: Item

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = params.get('id')
        return this.todoService.getById(Number(params.get('id')))
      })
      .subscribe(item => {
        this.item = item
      })
  }
}
