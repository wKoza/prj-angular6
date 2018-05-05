import {Component, Injector} from '@angular/core';
import { MyService } from './my.service';
import {EagerService} from './eager.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = `app works! - Environment : `;

    constructor(myService: MyService, eager: EagerService, private injector: Injector) { }

    getLazy() {
     console.log(this.injector.get(EagerService));
    }

}
