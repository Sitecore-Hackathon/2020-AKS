import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-hackathon-history',
  templateUrl: './hackathon-history.component.html',
  styleUrls: ['./hackathon-history.component.css']
})
export class HackathonHistoryComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('HackathonHistory component initialized with component data', this.rendering);
  }
}
