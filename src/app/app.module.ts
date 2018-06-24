import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpyInterceptor } from './log';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpyInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
