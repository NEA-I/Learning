import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(/(\d{2})(?!$)/g, '$1-');
  }

}
