import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';

//Widgets
import { ModBannerComponent }  from './widgets/banner/banner.component';
import { ModMenuComponent }  from './widgets/menu/menu.component';
import { ModFooterComponent }  from './widgets/footer/footer.component';

//Home modules
import { ModNewBookComponent }  from './modules/new_book/new_book.component';
import { ModHotBookComponent }  from './modules/hot_book/hot_book.component';

//Pages
import { PageHomeComponent }  from './pages/home/home.component';

//Services
import { BannerService } from './services/banner/banner.service';
import { BookService } from './services/book/book.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [
    AppComponent,

    //Widgets
    ModBannerComponent, ModMenuComponent, ModFooterComponent,

    //Home modules
    ModNewBookComponent, ModHotBookComponent,

    //Pages
    PageHomeComponent,
  ],
  providers: [ BannerService, BookService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
