import { Component } from '@angular/core'
import { Platform, ionicBootstrap } from 'ionic-angular'
import { StatusBar } from 'ionic-native'
import { TabsPage } from './views/tabs/tabs'
// import {enableProdMode} from '@angular/core';
//
// enableProdMode()

@Component({
  template: '<ion-nav [root]="rootPage" primary></ion-nav>'
})

export class Adroit {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleLightContent()
    })
  }
}

ionicBootstrap(Adroit)
