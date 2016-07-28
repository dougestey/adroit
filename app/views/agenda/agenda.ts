import { Component, ViewChild } from '@angular/core';
import { Loading, NavController, List } from 'ionic-angular';
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest';

import { AgendaItem } from '../../models/AgendaItem';
import { AgendaItemService } from '../../services/tocityhall-api/AgendaItem.service';

@Component({
  templateUrl: 'build/views/agenda/agenda.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class AgendaView {

  @ViewChild(List) list: List

  latestAgendaItems: AgendaItem[]
  upcomingAgendaItems: AgendaItem[]
  selectedItem: AgendaItem
  showIntro: boolean
  loading: any

  constructor(private agendaItemService:AgendaItemService, private nav:NavController) {
    this.load()
    this.showIntro = true
  }

  dismissIntro() {
    this.showIntro = false
  }

  voteUp(item) {
    item.opinion = 'good'
    this.list.closeSlidingItems()
  }

  voteDown(item) {
    item.opinion = 'bad'
    this.list.closeSlidingItems()
  }

  initLoadingAnimation() {
    this.loading = Loading.create({
      content: 'Loading agenda items...'
    })
    this.nav.present(this.loading)
  }

  dismissLoadingAnimation() {
    if (this.latestAgendaItems && this.upcomingAgendaItems) {
      this.loading.dismiss()
    }
  }

  load() {
    this.initLoadingAnimation()

    this.agendaItemService.latest()
      .$observable
      .subscribe(items => {
        this.latestAgendaItems = items
        this.dismissLoadingAnimation()
      })

    this.agendaItemService.upcoming()
      .$observable
      .subscribe(items => {
        this.upcomingAgendaItems = items
        this.dismissLoadingAnimation()
      })
  }

}
