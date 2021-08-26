import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { DescriptionComponent } from './description/description.component';
import { ListComponent } from './list/list.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SizeChangeComponent } from './size-change/size-change.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SizeService } from './size.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    BuyNowComponent,
    DescriptionComponent,
    ListComponent,
    SizeChangeComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NgSelectModule,
    FormsModule

  ],
  providers: [SizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
