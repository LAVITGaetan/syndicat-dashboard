import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedItem : string = 'default'

  selectSidebar(value: string) {
    this.selectedItem = value
  }
}
