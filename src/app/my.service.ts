import {Injectable} from '@angular/core';
import {MyModule} from './my.module';

@Injectable(
  {
    providedIn: MyModule
  }
  /*  {useFactory: (myConfig: MyConfig) =>
        new HeroService(MyConfig, true),
    deps: [MyConfig],}*/
)
export class MyService {

  message = 'message';

  constructor() { }

}
