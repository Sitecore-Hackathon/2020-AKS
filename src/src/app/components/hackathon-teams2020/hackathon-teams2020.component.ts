import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-hackathon-teams2020',
  templateUrl: './hackathon-teams2020.component.html',
  styleUrls: ['./hackathon-teams2020.component.css']
})
export class HackathonTeams2020Component implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('HackathonTeams2020 component initialized with component data', this.rendering);
  }
}
