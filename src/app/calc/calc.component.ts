import { Component, OnInit } from '@angular/core';
import { NumberconverterService } from '../services/numberconverter.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.less']
})
export class CalcComponent implements OnInit {

  subText = ''
  mainText = ''

  constructor(private numberconverterService: NumberconverterService) { }

  ngOnInit(): void {

  }

  pressKey(key: any) {
    if (key !== '#' && key !== "->") {
      let charcode = this.numberconverterService.getCharacterFromKey(key)
      this.mainText += charcode
    }
    if (key === '<-') {
      this.mainText = ""
      key = ""
    }
    if (key === '#') {
      this.mainText += key
    }
    if (this.mainText.length === 10) {
      return;
    }
  }

}
