import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BuyNowComponent,
    DescriptionComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
