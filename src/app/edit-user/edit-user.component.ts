import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  finishedEditing(userUpdate){
    this.userService.updateUser(userUpdate);
  }

  delete(user) {
    if(confirm("Are you sure you want to delete this user from the system?")){
      this.userService.destroy(user);
    }
  }

}
