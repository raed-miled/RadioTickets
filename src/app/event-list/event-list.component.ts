import { Component, OnInit } from '@angular/core';
import Event from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events : Event[];
  selectedEvent : Event;

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.GetEvents().subscribe(Events => this.events = Events);
  }

  selectEvent(event:Event):void{
    this.selectedEvent = event;
  }

  private getIndexOfEvent = (eventId:number)=>{
    return this.events.findIndex((event)=>{
      return event.id === eventId;
    })
  }

  createNewEvent():void{
    let date = new Date();
    var event:Event={
      date:date,
      img:"",
      location:""
    };
    this.selectEvent(event);
  }

  deleteEvent = (eventId:number)=>{
    var idx = this.getIndexOfEvent(eventId);
    if(idx !== -1) {
      this.events.splice(idx,1);
      this.selectEvent(null);
    }
    return this.events;
  }

  addEvent = (event:Event)=>{
    this.events.push(event);
    this.selectEvent(event);
    return this.events;
  }

  updateEvent = (event:Event)=>{
    var idx = this.getIndexOfEvent(event.id);
    if (idx !== -1){
      this.events[idx]=event;
      this.selectEvent(event);
    }
    return this.events;
  }

}
