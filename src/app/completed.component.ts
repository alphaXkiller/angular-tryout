import { Component, OnInit } from '@angular/core'

import { Item } from './data-model'
import { TodoService } from './app.service'

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html'
})

export class CompletedComponent implements OnInit {
  completed_items: Item[] = []

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getCompletedItems()
  }

  getCompletedItems(): void {
    this.todoService.getCompletedItems()

      .then(list => this.completed_items = list)
  }
}
