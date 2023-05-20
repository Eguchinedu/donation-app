import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './reusable-components/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { ContactModule } from './Pages/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ContactModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
