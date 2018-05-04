import {Component, Injector} from '@angular/core';
import { MyService } from './my.service';
import {EagerService} from './eager.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = `app works! - Environment : `;

    constructor(myService: MyService, eager: EagerService, private injector: Injector) {

      console.info(`myService : ${myService.message}`);


      /* myService.test().subscribe(
           (res) => {
               console.log('hello', res)
           },
           (err) => {
               console.log('world', err);

           }
       );*/



    }

    getLazy() {
     console.log(this.injector.get(EagerService));
    }

}
