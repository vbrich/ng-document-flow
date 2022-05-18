import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';

import { ExamplesComponent } from './examples/examples.component';
import { ClosingCeremonyComponent } from './closing-ceremony/closing-ceremony.component';
import { ClosingCeremony2Component } from './closing-ceremony2/closing-ceremony2.component';
import { ClosingCeremony3Component } from './closing-ceremony3/closing-ceremony3.component';
import {
  DialogContentExampleDialog,
  DialogContentDocument1,
  DialogContentDocument2,
} from './closing-ceremony2/closing-ceremony2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ClosingCeremonyComponent },
      { path: 'closing2', component: ClosingCeremony2Component },
      { path: 'closing3', component: ClosingCeremony3Component },
      { path: 'examples', component: ExamplesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    DialogContentComponent,
    ExamplesComponent,
    ClosingCeremonyComponent,
    ClosingCeremony2Component,
    ClosingCeremony3Component,
    DialogContentExampleDialog,
    DialogContentDocument1,
    DialogContentDocument2,
  ],
  entryComponents: [
    DialogContentComponent,
    DialogContentExampleDialog,
    DialogContentDocument1,
    DialogContentDocument2,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
