import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject, map } from 'rxjs';

@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .pipe(map((response: any): any => {
        return response;
      }))
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: any | undefined) {
    this.messages.next(msg);
  }

}