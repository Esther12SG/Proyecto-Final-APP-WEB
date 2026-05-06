import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

export interface FriendUpdateEvent {
  table: string;
  operation: string;
  column: string;
  old_value: string;
  new_value: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyFriendsSocket {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  escucharCambios(): Observable<FriendUpdateEvent> {
    return new Observable((observer) => {
      this.socket.on('my_friends_update', (data: FriendUpdateEvent) => {
        observer.next(data);
      });
    });
  }
}