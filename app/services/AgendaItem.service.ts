import { Injectable } from '@angular/core';
import { Resource, ResourceParams } from 'ng2-resource-rest';

@Injectable()

@ResourceParams({
  url: 'https://tocityhall-api-staging.herokuapp.com/v0',
  path: '/agenda_items'
})

export class AgendaItemService extends Resource {}
