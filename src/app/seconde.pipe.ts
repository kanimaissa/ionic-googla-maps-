import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconde'
})
export class SecondePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
