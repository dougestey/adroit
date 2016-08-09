import { Component } from '@angular/core'
import { MenuController } from 'ionic-angular'

import { AgendaView } from '../agenda/agenda'
import { CouncillorsView } from '../councillors/councillors'

@Component({
  templateUrl: 'build/views/tabs/tabs.html'
})

export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  // private tab3Root: any;

  constructor(private menu:MenuController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = AgendaView
    this.tab2Root = CouncillorsView
    // this.tab3Root = View;
    menu.enable(true)
  }
}
