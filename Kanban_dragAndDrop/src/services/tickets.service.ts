import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private kanbanData = 'assets/kanbanStub.json';

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<any>(this.kanbanData);
  }
}
