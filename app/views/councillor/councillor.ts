import { Component } from '@angular/core';
import { Loading, NavController, NavParams } from 'ionic-angular';
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest';

import { Person } from '../../models/Person';
import { PeopleService } from '../../services/tocityhall-api/People.service';

@Component({
  templateUrl: 'build/views/councillor/councillor.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class CouncillorView {

  councillor: Person
  loading: any

  constructor(private peopleService:PeopleService, private nav:NavController, private navParams:NavParams) {
    this.councillor = navParams.get('councillor')
    // this.get(this.councillor.id)
  }

  get(id) {
    // don't need to query this as a singleton yet, since the all() call gives us everything

    // this.initLoadingAnimation()

    // this.councillor = this.peopleService.query({id: id, (councillor) => {
    //   this.dismissLoadingAnimation()
    // })
  }

  initLoadingAnimation() {
    this.loading = Loading.create({
      content: 'Loading councillor...'
    });

    this.nav.present(this.loading)
  }

  dismissLoadingAnimation() {
    this.loading.dismiss()
  }

  getAvatar(councillor:any) {
    return { 'background-image': 'url(' + councillor.image + ')' }
  }

}
