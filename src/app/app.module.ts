import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { FooterComponent } from './footer/footer.component';
import { SportwearComponent } from './sportwear/sportwear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ShirtsComponent,
    ShoesComponent,
    FooterComponent,
    SportwearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
