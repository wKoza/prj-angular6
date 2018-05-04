import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: 'eager.component.html'
})
export class EagerComponent implements OnInit {

  test = 'toto';

  ngOnInit() {
  }

}
