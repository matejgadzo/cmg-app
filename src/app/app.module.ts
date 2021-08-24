import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
