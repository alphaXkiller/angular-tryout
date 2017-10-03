import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

import { Item } from './data-model'
import { TodoService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  toDoForm: FormGroup
  items:Item[] = []
  title = 'To Do App'


  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.initFormGroup()
  }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList(): void {
    this.todoService.getItems().then(list => this.items = list)
  }

  initFormGroup() {
    this.toDoForm = this.fb.group({
      name: '',
      description: ''
    })
  }

  onSubmit(todo) {
    this.items.push(todo)
  }
}
