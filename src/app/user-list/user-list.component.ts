import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
// import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  selectedUser;
  users: FirebaseListObservable<any[]>;
  @Output() userSelectSender = new EventEmitter();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  goToUserPage(clickedUser) {
    this.router.navigate(['user', clickedUser.$key]);
    this.userSelectSender.emit();
  }

  edit(user) {
    this.selectedUser = user;
  }

  finishedEditing(userUpdate){
    this.userService.updateUser(userUpdate);
    this.selectedUser = '';
  }

  delete(user) {
    if(confirm("Are you sure you want to delete this user from the system?")){
      this.userService.destroy(user);
    }
  }
}
