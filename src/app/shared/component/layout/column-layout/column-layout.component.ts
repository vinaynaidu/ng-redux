import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss']
})
export class ColumnLayoutComponent implements OnInit {

  @Input() displayLeftSidebar = true;
  @Input() displayRightSidebar = true;
  @Input() leftSidebarTitle;
  @Input() leftSidebarWidth = '240px';
  @Input() rightSidebarTitle;
  @Input() rightSidebarWidth = '300px';

  constructor() { }

  ngOnInit() {
  }

}
