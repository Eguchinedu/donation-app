import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './reusable-components/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { ContactModule } from './Pages/contact/contact.module';
import { DonateModule } from './Pages/donate/donate.module';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatRadioModule,
    CarouselModule.forRoot(),
    ContactModule,
    DonateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
