import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  @Output() loginSender = new EventEmitter();

  constructor(private userService: UserService) { }

  submitForm(userName: string, teamName: string) {
    var newUser = new User(userName, teamName, (Math.floor(Math.random()*20 + 11)));
    this.userService.addUser(newUser);
    this.loginSender.emit();
  }
}
