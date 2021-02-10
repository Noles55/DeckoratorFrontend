import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements OnDestroy{

  private eventChannels = {};
  private eventListeners: Subscription[] = [];

  //Sends an event to a specific channel
  public sendEvent<T>(eventName: string, data: T) {
    this.registerEvent(eventName);
    (this.eventChannels[eventName] as Subject<T>).next(data);
  }

  // Adds a listener to a channel with a response
  public subscribeToEvent<T>(eventName: string, response: (data: T) => any): Subscription {
    this.registerEvent<T>(eventName);
    let listener = this.eventChannels[eventName].subscribe(response);
    this.eventListeners.push(listener);
    return listener;
  }

  ngOnDestroy() {
    this.eventListeners.forEach(listener => listener.unsubscribe());
  }

  private registerEvent<T>(eventName: string) {
    if (!(eventName in this.eventChannels)) {
      this.eventChannels[eventName] = new Subject<T>();
    }
  }
}
