import { Component } from '@angular/core';
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest';

import { AgendaItem } from '../../models/AgendaItem';
import { AgendaItemService } from '../../services/AgendaItem.service';

@Component({
  templateUrl: 'build/views/home/home.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class HomeView {

  recentAgendaItems: AgendaItem[]
  selectedItem: AgendaItem
  showIntro: boolean

  constructor(private agendaItemService:AgendaItemService) {
    this.all()
    this.showIntro = true
  }

  all() {
    this.recentAgendaItems = this.agendaItemService.query()
  }

  dismissIntro() {
    this.showIntro = false
  }

}
