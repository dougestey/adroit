import { Injectable } from '@angular/core';
import { AgendaItem } from '../models/AgendaItem.ts';

const allAgendaItems: AgendaItem[] = [
  {id: 11, title: 'Mr. Nice', body: 'Yoooooo'},
  {id: 12, title: 'Narco', body: 'Yoooooo'},
  {id: 13, title: 'Bombasto', body: 'Yoooooo'},
  {id: 14, title: 'Celeritas', body: 'Yoooooo'},
  {id: 15, title: 'Magneta', body: 'Yoooooo'},
  {id: 16, title: 'RubberMan', body: 'Yoooooo'},
  {id: 17, title: 'Dynama', body: 'Yoooooo'},
  {id: 18, title: 'Dr IQ', body: 'Yoooooo'},
  {id: 19, title: 'Magma', body: 'Yoooooo'},
  {id: 20, title: 'Tornado', body: 'Yoooooo'}
];

@Injectable()
export class AgendaService {
  all() {
    return Promise.resolve(allAgendaItems)
  }
  upcoming() {
    return []
  }
  latest() {
    return []
  }
}
