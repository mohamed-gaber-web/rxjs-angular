import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { of, interval, from, fromEvent, range, timer, throwError, Subscription, Observable, concat } from 'rxjs';
import { map, tap, filter, concatMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.css']
})
export class RxjsOperatorComponent implements OnInit, OnDestroy {

  url: string = "https://jsonplaceholder.typicode.com/posts";
  sub: Subscription;
  // Posts$: Observable<any>;
  Posts: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();

    // Exp Concat
    // const num1$ = of(1, 2, 3);
    // const num2$ = of(4, 5, 6);
    // const num3$ = of(7, 8, 9);
    
    // const result$ = concat(num1$, num2$, num3$);

    // result$.subscribe(val => console.log(val));

    // Exp Filter
    // const Users = of([
    //   {name: 'mohamed', age: 30},
    //   {name: 'ahmed', age: 40},
    //   {name: 'sara', age: 23}
    // ])
    // const filterName = Users.pipe(
    //   filter(value => console.log(value[0]))
    // )
    
    // filterName.subscribe(data => {console.log(data)})

  //  const result = this.http.get(this.url).pipe(
  //    // tap(res => {console.log('first', res)}),
  //    concatMap(() => this.http.get(this.url)),
  //    // tap(res => {console.log('second', res)}),
  //    // concatMap(() => this.http.get(this.url)),
  //  )
 

  //  result.subscribe(val => {console.log(val)})
   
  }

  getPosts() {
    this.http.get(this.url).pipe(
      tap(res => console.log(res) ),
      map(res => {
        // return res.id * 2
      })
    )
    .subscribe(posts => {
      // this.Posts = posts
      console.log(posts)
    })
    // Create observable And Destroy Observable 
    // don't use subscribe in this way
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}


// shareReplay() => handle 2 http request in network browser to one http request
// concat() => concatination from more observable
// filter() => filter data and return new data
// concatMap
