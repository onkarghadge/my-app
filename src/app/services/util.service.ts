import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  removeNull(_obj){
      var propNames = Object.getOwnPropertyNames(_obj);
      for (var i = 0; i < propNames.length; i++) {
        var propName = propNames[i];
        if (_obj[propName] === null || _obj[propName] === undefined) {
          delete _obj[propName];
        }
      }
    return _obj;
  }
}
