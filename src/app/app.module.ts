import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: TestComponent },
      { path: 'test2', component: Test2Component },
    ]),
  ],
  declarations: [
    AppComponent,
    DialogContentComponent,
    TestComponent,
    Test2Component,
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
