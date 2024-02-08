
import { HTTP_INTERCEPTORS, HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { errorCatcherInterceptor } from './error-catcher.interceptor';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'Interceptor_test';

  http1 = inject(HttpClient)
//  constructor(public http:HttpClient){
//   this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res =>{
//       console.log(res);
    
//     }))
   

//   }

  Api1(){
    this.http1.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res =>{
      console.log(res);
    
    }))
  }
 

  Api2(){
    this.http1.get("https://jsonplaceholder.typicode.com/tobhbdos/1hggc").subscribe((res =>{
      console.log(res);
    
    }))
  }

  ngOnInit(): void {
   
    this.http1.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res =>{
      console.log(res);
    
    }))
  }
  
  
}
