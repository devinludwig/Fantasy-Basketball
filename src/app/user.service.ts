import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string) {
    return this.angularFire.database.object('/users/' + userId);
  }

  updateUser(userUpdate) {
    var userEntry = this.getUserById(userUpdate.$key);
    userEntry.update({
      userName: userUpdate.userName,
      teamName: userUpdate.teamName,
      ranking: userUpdate.ranking
    });
  }

  destroy(user) {
    this.getUserById(user.$key).remove();
  }
}
