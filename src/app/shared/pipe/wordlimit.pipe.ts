import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit'
})
export class WordlimitPipe implements PipeTransform {

  transform(value: string, count?: number): string {
    const counter = count ? count : 30;
    return value.slice(0, counter);
  }

}
