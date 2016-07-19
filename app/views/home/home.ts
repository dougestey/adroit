import { Component } from '@angular/core';
import { RESOURCE_PROVIDERS } from 'ng2-resource-rest';

import { AgendaItem } from '../../models/AgendaItem';
import { AgendaItemService } from '../../services/AgendaItem.service';

@Component({
  templateUrl: 'build/views/home/home.html',
  providers: [ RESOURCE_PROVIDERS ]
})

export class HomeView {

  agendaItems: AgendaItem[];
  selectedItem: AgendaItem;

  constructor(private agendaItemService:AgendaItemService) {
    this.all()
  }

  all() {
    this.agendaItems = this.agendaItemService.query();
  }

}
