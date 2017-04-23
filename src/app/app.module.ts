import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';

//Widgets
import { ModHeaderComponent }  from './widgets/header/header.component';
import { ModFooterComponent }  from './widgets/footer/footer.component';

//Home modules
import { ModSlideBannerComponent }  from './modules/slide_banner/slide_banner.component';
import { ModNewBookComponent }  from './modules/new_book/new_book.component';
import { ModHotBookComponent }  from './modules/hot_book/hot_book.component';

//Pages
import { PageHomeComponent }  from './pages/home/home.component';

//Services
import { BookService } from './services/book/book.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [
    AppComponent,

    //Widgets
    ModHeaderComponent, ModFooterComponent,

    //Home modules
    ModSlideBannerComponent, ModNewBookComponent, ModHotBookComponent,

    //Pages
    PageHomeComponent,
  ],
  providers: [ BookService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
