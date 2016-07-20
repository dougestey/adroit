import { Component } from '@angular/core';
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest';

import { Person } from '../../models/Person';
import { PeopleService } from '../../services/People.service';

@Component({
  templateUrl: 'build/views/councillors/councillors.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class CouncillorsView {

  councillors: Person[];

  constructor(private peopleService:PeopleService) {
    this.all()
  }

  all() {
    this.councillors = this.peopleService.query();
  }

  getAvatar(councillor:any) {
    return { 'background-image': 'url(' + councillor.image + ')' }
  }

}
