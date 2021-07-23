import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'km'
})
export class KmPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toFixed(0);
  }

}
