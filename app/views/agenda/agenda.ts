import { Component, ViewChild } from '@angular/core'
import { Loading, NavController, MenuController, List, Alert } from 'ionic-angular'
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest'

import { AgendaItem } from '../../models/AgendaItem'
import { AgendaItemService } from '../../services/tocityhall-api/AgendaItem.service'

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
  alert: any
  hasSeenVotingExplanation: boolean

  constructor(private agendaItemService:AgendaItemService, private nav:NavController, private menu:MenuController) {
    this.load()
    this.showIntro = true
    menu.enable(true)
  }

  showVotingExplanation() {
    if (this.hasSeenVotingExplanation)
      return

    this.alert = Alert.create({
      title: 'You just voted!',
      message: 'We\'ll let your councillor know your thoughts on this motion - as well as others you vote on going forward. Keep it up!',
      buttons: ['Ok']
    })

    this.hasSeenVotingExplanation = true
    this.nav.present(this.alert)
  }

  dismissVotingExplanation() {
    this.alert.dismiss()
  }

  openCouncilmatic(item) {
    window.open('http://councilmatic.t0ronto.ca/legislation/' + item.bill.name, '_system')
    this.list.closeSlidingItems()
  }

  voteUp(item) {
    item.opinion = 'good'
    this.showVotingExplanation()
    this.list.closeSlidingItems()
  }

  voteDown(item) {
    item.opinion = 'bad'
    this.showVotingExplanation()
    this.list.closeSlidingItems()
  }

  dismissIntro() {
    this.showIntro = false
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
