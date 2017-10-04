import { Component } from '@angular/core'

import { Item } from './data-model'
import { TodoService } from './app.service'

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html'
})

export class TodoComponent {
  todo_items: Item[] = []

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoItems()
  }

  getTodoItems(): void {
    this.todoService.getTodoItems()

      .then(list => this.todo_items = list)
  }
}
