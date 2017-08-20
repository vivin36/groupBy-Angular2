import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroupBYComponent } from './group-by/group-by.component';
import { DerpPipe } from './derbpipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupBYComponent,
    DerpPipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
