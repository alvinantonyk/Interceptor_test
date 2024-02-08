import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { errorCatcherInterceptor } from './error-catcher.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    // other modules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: errorCatcherInterceptor,
      multi: true
    }
    // other providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
