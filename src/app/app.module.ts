import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtModule } from '@auth0/angular-jwt';

import { TokenService } from './shared/services/token.service';
import { LocalstorageService } from './shared/services/localstorage.service';
import { HttpClientModule } from '@angular/common/http';
// const token = new TokenService(new LocalstorageService()).token;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return token;
    //     }
    //   }
    // })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
