import { Injectable } from '@angular/core'
import * as Bluebird from 'bluebird'

import { Item } from './data-model'
import { Items } from './app.mock'

@Injectable()

export class TodoService {
  getItems(): Bluebird<Item[]> {
    return Bluebird.resolve(Items)
  }
}
