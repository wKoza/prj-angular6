import { Injectable } from '@angular/core';
// import {LazyModule} from './lazy.module';


@Injectable({
  providedIn: 'root'
}
)
export class LazyService {

   constructor() {
       console.log('lazyService');
   }


}
