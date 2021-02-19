import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgressStepComponent } from './progress-step/progress-step.component';
import { ProgressStepDirective } from './progress-step.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkersCompensationComponent } from './workers-compensation/workers-compensation.component';
import { InvoiceComponent } from './invoice/invoice.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    WorkersCompensationComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
