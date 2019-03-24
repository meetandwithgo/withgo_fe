import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/model/event';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() data: Event;

  constructor() { }

  ngOnInit() {
    this.data['date'] = `${this.data.eventDate} ${this.data.salesStart}~${this.data.salesEnd}`
  }

}