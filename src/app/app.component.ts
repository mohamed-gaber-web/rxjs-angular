import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  ngOnInit() {
    // const obs = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(4);
    //
    //   setTimeout(() => {
    //     subscriber.next(3);
    //     subscriber.complete();
    //   }, 1000);
    // });
    //
    // console.log('after observables');
    //
    // // Observer
    // obs.subscribe(
    //   (next) => console.log(next),
    //   (error) => console.log(error),
    //   () => console.log('completed')
    // );
  }

}
