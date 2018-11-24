import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './service/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    DataService
  ],
  exports: [
  ]
})
export class CoreModule { }
