import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImageRegionSelectorLibraryModule} from '../../../image-region-selector-library/src/lib/image-region-selector-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageRegionSelectorLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
