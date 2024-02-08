import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable, catchError, of, throwError } from 'rxjs';
import { map, filter } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class errorCatcherInterceptor implements HttpInterceptor {

  constructor(private toaster:ToastrService){

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>>{

  return next.handle(req)
  .pipe(
 
  tap((response: HttpEvent<any>)=>{
    if(!(response instanceof HttpResponse)) return;
   //alert(JSON.stringify(response.body,null,4))
       console.log("Tapped",(response as HttpResponse<any>).body)

    this.toaster.success("success")
  
    
    }),
    catchError((error) => {
      console.error('Fake api', error.status);
      //alert("fake Api")
      this.toaster.error("fake api")
      
      return throwError(() => error)

    })
  )
    
  
}
}
