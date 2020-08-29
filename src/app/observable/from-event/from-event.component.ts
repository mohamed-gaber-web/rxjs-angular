import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('btn') addButton: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addButton.nativeElement, 'click')
      .subscribe(res => {
        let videoVal = 'video ' + count++
        this.addVideo(videoVal)
      })
  }

  addVideo(val) {
    let liElement = document.createElement('li');
    liElement.innerText = val;
    document.getElementById('ul-container').appendChild(liElement);
  }

}


/***
 * --- fromEvent
 * use like addEventListner in javascript
 * generate observable stream
 * elementEvenet
 * event name
 * return observable<unknow>
 * 
 */