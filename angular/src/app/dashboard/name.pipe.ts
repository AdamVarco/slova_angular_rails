import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'namePipe'
})

export class CustomPipe implements PipeTransform {
  transform(value: any) {
    var splitOnSobachka: any;
    if (value) { 
      splitOnSobachka = value.indexOf('@') > -1 ?  value.split('@')[0] : value;
      return splitOnSobachka.charAt(0).toUpperCase() + splitOnSobachka.slice(1);
    }
  }
}