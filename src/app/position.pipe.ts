import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Member[]) {
    var output: Member[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].isAdmin === false) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
