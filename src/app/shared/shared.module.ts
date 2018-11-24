import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartComponent } from './component/chart/bar-chart/bar-chart.component';
import { CollapsibleListComponent } from './component/framework/collapsible-list/collapsible-list.component';
import { ColumnLayoutComponent } from './component/layout/column-layout/column-layout.component';
import { DonutChartComponent } from './component/chart/donut-chart/donut-chart.component';
import { GaugeChartComponent } from './component/chart/gauge-chart/gauge-chart.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { PieChartComponent } from './component/chart/pie-chart/pie-chart.component';
import { StackedBarChartComponent } from './component/chart/stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarChartComponent,
    CollapsibleListComponent,
    ColumnLayoutComponent,
    DonutChartComponent,
    GaugeChartComponent,
    MenuBarComponent,
    PieChartComponent,
    StackedBarChartComponent
  ],
  providers: [],
  exports: [
    CollapsibleListComponent,
    ColumnLayoutComponent,
    CommonModule,
    MenuBarComponent
  ]
})
export class SharedModule { }
