import {Component, OnInit} from '@angular/core';
import {LazyService} from './lazy.service';
import {AnotherService} from './another.service';
// import {AnotherService} from './another.service';


@Component({
  selector: 'app-lazy',
  template: '<p>lazy works!</p>'
})
export class LazyComponent implements OnInit {

  constructor(private lazyService: LazyService/*, private anotherService: AnotherService*/) {}

  ngOnInit() {
  }


}
