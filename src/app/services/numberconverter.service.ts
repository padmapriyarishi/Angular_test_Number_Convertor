import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberconverterService {

  constructor() { 

  }
  getCharacterFromKey(key:any) {
    var chr = String.fromCharCode(65 + key);
    return chr
  }
}

