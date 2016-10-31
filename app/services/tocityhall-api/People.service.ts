import { Injectable } from '@angular/core'
import { Resource, ResourceParams } from 'ng2-resource-rest'

@Injectable()

@ResourceParams({
  url: 'http://tocityhall-api-staging.herokuapp.com/v0',
  path: '/people/{id}'
})

export class PeopleService extends Resource {}
