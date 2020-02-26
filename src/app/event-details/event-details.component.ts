import { Component, OnInit, Input } from '@angular/core';
import Event from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() event:Event;
  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private EventService:EventService) { }

  ngOnInit(): void {
  }

  createEvent(event:Event){
    this.EventService.CreateEvent(event).subscribe((newEvent => {
      this.createHandler(newEvent);
    }))
  }

  updateEvent(event:Event){
    this.EventService.UpdateEvent(event).subscribe((updateEvent =>{
      this.updateHandler(updateEvent);
    }))
  }

  deleteEvent(eventId:number){
    this.EventService.DeleteEvent(eventId).subscribe((deleteEvent) =>{
      this.deleteHandler(deleteEvent);
    })
  }

}
