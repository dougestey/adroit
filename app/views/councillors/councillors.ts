import { Component } from '@angular/core'
import { Loading, NavController } from 'ionic-angular'
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest'

import { Person } from '../../models/Person'
import { PeopleService } from '../../services/tocityhall-api/People.service'
import { CouncillorView } from '../councillor/councillor'

@Component({
  templateUrl: 'build/views/councillors/councillors.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class CouncillorsView {

  councillors: Person[]
  loading: any

  constructor(private peopleService:PeopleService, private nav:NavController) {
    this.all()
  }

  all() {
    this.initLoadingAnimation()

    this.councillors = this.peopleService.query(() => {
      this.dismissLoadingAnimation()
    })
  }

  initLoadingAnimation() {
    this.loading = Loading.create({
      content: 'Loading councillors...'
    });

    this.nav.present(this.loading)
  }

  dismissLoadingAnimation() {
    this.loading.dismiss()
  }

  getAvatar(councillor:any) {
    return { 'background-image': 'url(' + councillor.image + ')' }
  }

  selectCouncillor(councillor:any) {
    this.nav.push(CouncillorView, {
      councillor: councillor
    })
  }

}
