import { Component } from '@angular/core';
import { Loading, NavController } from 'ionic-angular';
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
  loading: any

  constructor(private agendaItemService:AgendaItemService, private nav:NavController) {
    this.all()
    this.showIntro = true
  }

  all() {
    this.initLoadingAnimation()

    this.recentAgendaItems = this.agendaItemService.query(() => {
      this.dismissLoadingAnimation()
    })
  }

  dismissIntro() {
    this.showIntro = false
  }

  initLoadingAnimation() {
    this.loading = Loading.create({
      content: 'Loading agenda items...'
    });

    this.nav.present(this.loading);
  }

  dismissLoadingAnimation() {
    this.loading.dismiss()
  }

}
