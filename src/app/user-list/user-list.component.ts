import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  @Output() selectedUser;
  @Output() userSelectSender = new EventEmitter();
  users;
  filterByRanking: string = 'all';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.users = dataLastEmittedFromObserver;
    });
  }

  onChange(optionClicked) {
    this.filterByRanking = optionClicked;
  }

  goToUserPage(clickedUser) {
    this.router.navigate(['user', clickedUser.$key]);
    this.userSelectSender.emit();
  }

  edit(user) {
    this.selectedUser = user;
  }
}
