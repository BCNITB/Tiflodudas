import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string): any[] {
    
    if(text === ''){
      return array;
    }

    const arg1 = text.split(" ")[0];
    let arg2 = text.split(" ")[1];
    let arg3 = text.split(" ")[2];

    if(arg2 == ""){
      arg3 = arg2 = arg1;
    }

    if(arg3 == ""){
      arg3 = arg1;
    }

    return array.filter(product => {
      return  product.classification.toLowerCase()
        //.includes(text.toLowerCase());
        .includes(arg1.toLowerCase() && arg2.toLowerCase() && arg3.toLowerCase());
    });
  }
}
