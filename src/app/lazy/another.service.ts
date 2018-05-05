import {Injectable} from '@angular/core';
import {AnotherModule} from './another.module';

@Injectable(
  {
    providedIn: AnotherModule
  }
  /*  {useFactory: (myConfig: MyConfig) =>
        new HeroService(MyConfig, true),
    deps: [MyConfig],}*/
)
export class AnotherService {

  constructor() { console.log('AnotherService'); }

}
