import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let foo = value.split("T",9)
    let time = foo[1].split(".",1)
    return foo[0] + " " + time;
  }

}
