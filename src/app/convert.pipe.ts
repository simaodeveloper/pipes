import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, typeUnit: string): unknown {
    if (!value) return value;

    switch (typeUnit) {
      case 'km':
        return parseFloat(value) * 1.60934;
      case 'm':
        return parseFloat(value) * 1.60934 * 1000;
      case 'cm':
        return parseFloat(value) * 1.60934 * 1000 * 100;
      default:
        return value;
    }
  }

}
