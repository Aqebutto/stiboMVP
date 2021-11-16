import { CoreService } from './../shared/services/core.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();
  showUser = false;
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this._coreService.getAllUsers();
    this.users$ = this._coreService.allUsers$;
    this.users$.subscribe((users) => console.log(users));
  }
  toggleShowUser(user: User) {
    user.showUser = !user.showUser;
    this._coreService.user = user;
    if (user.showUser) {
      this._coreService.getUserPosts();
    }
  }
}
