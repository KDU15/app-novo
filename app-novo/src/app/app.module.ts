import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUser } from '@ng-icons/heroicons/outline';
import { bootstrapPersonCircle, bootstrapBookmarkFill, bootstrapBookmarkCheckFill, bootstrapBookmarkPlusFill, bootstrapPersonVcard, bootstrapBoxArrowRight, bootstrapGridFill, bootstrapList, bootstrapCursorFill } from '@ng-icons/bootstrap-icons';
import { CarouselComponent } from './content/carousel/carousel.component';
import { DestaquesComponent } from './content/destaques/destaques.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CarouselComponent,
    DestaquesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    NgIconsModule.withIcons({ 
      featherAirplay,
      heroUser,
      bootstrapPersonCircle,
      bootstrapBookmarkFill,
      bootstrapBookmarkCheckFill,
      bootstrapBookmarkPlusFill,
      bootstrapPersonVcard,
      bootstrapBoxArrowRight,
      bootstrapGridFill,
      bootstrapCursorFill,
      bootstrapList
    }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
