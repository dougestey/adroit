import { Injectable } from '@angular/core';
import { RequestMethod } from "@angular/http";
import { Resource, ResourceParams, ResourceAction, ResourceResult } from 'ng2-resource-rest';

@Injectable()

@ResourceParams({
  url: 'https://tocityhall-api-staging.herokuapp.com/v0/agenda_items',
})

export class AgendaItemService extends Resource {

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/latest',
    isArray: true
  })
  latest(data?:any, callback?:Function): ResourceResult { return null; }

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/upcoming',
    isArray: true
  })
  upcoming(data?:any, callback?:Function): ResourceResult { return null; }

}
