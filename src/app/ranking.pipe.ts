import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: "ranking",
  pure: false
})

export class RankingPipe implements PipeTransform {
  transform(input, selectedRanking) {
    var output: User[] = [];
    if(selectedRanking === "high") {
      input.forEach((user) => {
        if (user.ranking < 10) {
          output.push(user);
        }
      })
      return output;
    } else if (selectedRanking === "low") {
      input.forEach((user) => {
        if (user.ranking >= 10) {
          output.push(user);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
