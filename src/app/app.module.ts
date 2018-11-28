import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

// Angular Material
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { HomeComponent } from './home/home.component';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpa, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer/footer.component';
library.add( faTwitter, faFacebookF, faLinkedinIn, faSpa, faInfoCircle, faUser );

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
