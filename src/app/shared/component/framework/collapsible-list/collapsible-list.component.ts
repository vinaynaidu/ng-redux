import { Component, Input } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent {

  @Input() isCollapsed: boolean = true;
  @Input() showLeftBorder: boolean = true;
  @Input() showRightBorder: boolean = false;
  @Input() headerText;

  // Using getter and setter for change detection
  @Input() set data(value) {
    this.listItems = value;
    this.updateListContainerHeight();
  }

  get data() {
    return this.listItems;
  }

  contentHeight: number = 0;

  private listItems = [];
  readonly dataItemHeight: number = 22;

  constructor() { }

  updateListContainerHeight() {
    // 10 px for padding
    this.contentHeight = (this.dataItemHeight * this.listItems.length) + 10;
  }

  toggleContentVisibility() {
    this.isCollapsed = !this.isCollapsed;
  }

}
