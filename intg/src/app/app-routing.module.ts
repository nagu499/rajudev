import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { WorkersCompensationComponent } from './workers-compensation/workers-compensation.component';

const routes: Routes = [
  { path: 'workers-compensation', component: WorkersCompensationComponent },
  { path: 'summary', component: InvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
