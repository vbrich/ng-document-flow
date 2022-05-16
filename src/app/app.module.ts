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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ClosingCeremonyComponent },
      { path: 'examples', component: ExamplesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    DialogContentComponent,
    ExamplesComponent,
    ClosingCeremonyComponent,
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
