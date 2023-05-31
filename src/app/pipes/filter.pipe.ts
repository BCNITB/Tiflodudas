import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {
    
    if(text === ''){
      return array;
    }

    return array.filter(product => {
      return  product[column].toLowerCase()
        .includes(text.toLowerCase().split(' '));
    });
  }

}
