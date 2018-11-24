import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'workbook', pathMatch: 'full' },

    // Lazy load feature modules. Lazy loading syntax uses loadChildren followed by a string
    // that is the path to the module, a hash mark or #, and the module’s class name.
    // https://angular.io/guide/lazy-loading-ngmodules#routes-at-the-app-level
    { path: 'workbook', loadChildren: './workbook/workbook.module#WorkbookModule', pathMatch: 'prefix' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
