import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CronEditorModule } from 'cron-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CronEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
