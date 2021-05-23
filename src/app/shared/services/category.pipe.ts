import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(filterBy: number, items: any[]): unknown {
    if(items.length > 0){
      const { name } = items.find(item => item.id === filterBy);
      return name ? name : false;
    }
  }

}
