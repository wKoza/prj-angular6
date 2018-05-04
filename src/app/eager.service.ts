import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
}
)
export class EagerService {

  test = 'toto';


  constructor() {
    console.log('EagerService');
  }


}
