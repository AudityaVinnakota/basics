import { Component, Input, EventEmitter, Output , OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input('img') postImg = '';

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log("constructor");
  }
 /*

 */
  ngOnInit() {
    console.log("ngOnInit");
  }
  /**
   * Called before ngOnInit() (if the component has bound inputs)
   *  and whenever one or more data-bound input properties change. 
   */
  ngOnChanges() { 
    console.log('ngOnChanges called')
  }

  ngDoCheck() { 
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterVontentInit called')
  }
  ngAfterContentChecked(): void {
    console.log("ngafterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
}
