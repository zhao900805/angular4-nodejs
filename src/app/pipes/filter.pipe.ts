import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../models/user";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: User[], searchText: string): User[] {
    if(searchText!=null){
      return items.filter(item =>{
          if((""+item.id).includes(searchText)||(""+item.login).includes(searchText)){
            return true;
          }
        return false;
      });
    }else{
      return items;
    }  
  }

}
