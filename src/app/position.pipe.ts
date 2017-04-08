import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Member[], selectedPosition) {
    var output: Member[] = [];
    if (selectedPosition === "allMembers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "player" || input[i].role === "staff") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedPosition === "forward") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "right-wing" || input[i].position === "left-wing" || input[i].position === "center") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (selectedPosition === "defense") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "defense") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (selectedPosition === "goalie") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "goalie") {
            output.push(input[i]);
          }
        }
      return output;
    } else if (selectedPosition === "staff") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position === "coach" || input[i].position === "support") {
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }

}
