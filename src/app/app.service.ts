import { Injectable } from '@angular/core'
import * as Bluebird from 'bluebird'
import * as R from 'ramda'

import { Item } from './data-model'
import { Items } from './app.mock'

@Injectable()

export class TodoService {
  getCompletedItems(): Bluebird<Item[]> {
    return Bluebird.resolve(R.filter(R.propEq('completed', true))(Items))
  }

  getTodoItems(): Bluebird<Item[]> {
    return Bluebird.resolve(R.filter(R.propEq('completed', false))(Items))
  }
}
