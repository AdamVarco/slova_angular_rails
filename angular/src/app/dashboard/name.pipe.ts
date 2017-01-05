import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'namePipe'
})

export class CustomPipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.indexOf('@') > -1 ?  value.split('@')[0] : value;
    }
  }
}