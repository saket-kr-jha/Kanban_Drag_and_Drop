import { Component, OnInit } from '@angular/core';
import { Task } from 'src/kanban-interface';
import { TicketsService } from 'src/services/tickets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: TicketsService){}
  title = 'Kanban_dragAndDrop';
  ticketDetails:Task[]=[];
  currentItem: any;

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    return this.service.getTickets().subscribe((response)=>{
      console.log(response);
      this.ticketDetails = response;
    });
  }

  filterTickets(status: string){
    return this.ticketDetails.filter(m => m.status === status)
  }

  onDragStart(item: any){
    console.log(item);
    this.currentItem = item;
  }

  onDragOver(event:any){
    // console.log(event);
    event.preventDefault();
  }

  onDrop(event: any, status: string) {
    event.preventDefault();
    const record = this.ticketDetails.find(item => item.id == this.currentItem.id);
    if(record!= undefined){
      record.status=status;
    }
    this.currentItem= null;
  
  }
}
