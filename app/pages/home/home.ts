import {Component,OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AgendaItem} from '../../models/AgendaItem';
import {AgendaService} from '../../services/agenda.service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AgendaService]
})

export class HomePage implements OnInit {
  agendaItems: AgendaItem[];
  selectedHero: AgendaItem;
  constructor(private agendaService: AgendaService) { }
  all() {
    this.agendaService.all().then(agendaItems => this.agendaItems = agendaItems);
  }
  ngOnInit() {
    this.all();
  }
}
