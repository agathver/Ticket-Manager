import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showNewTicketButton = false;
  @Input() baseUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
