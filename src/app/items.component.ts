import { Component, OnInit } from '@angular/core'

import { Item } from './data-model'
import { TodoService } from './app.service'

@Component({
  selector: 'items',
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit {
  items: Item[] = []
  show_todo: boolean = true

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoItems()
  }

  getTodoItems(): void {
    this.todoService.getTodoItems()
      .then(items => this.items = items)
  }

  getCompletedItems(): void {
    this.todoService.getCompletedItems()
      .then(items => this.items = items)
  }

  displayItems(status: string): void {
    if (status === 'todo') {
      this.show_todo = true
      this.getTodoItems()
    }
    else {
      this.show_todo = false
      this.getCompletedItems()
    }
  }
}
