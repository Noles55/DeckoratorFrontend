import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loading = false;

  constructor(private notificationService: NotificationService) {
    this.notificationService.subscribeToEvent<boolean>("loading", (status) => this.loading = status);
  }
}
