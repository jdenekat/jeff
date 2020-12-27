import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private gtag: Function;

  constructor() {
    this.gtag = (<any>window).gtag;
   }

  public emitNavigation(event: NavigationEnd): void {
    // this.gtag('event', 'page_view');
  }

  public emitEvent(category: string, action: string, label: string = null,
    value: number = null): void {
    this.gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  }
}
