import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>({ username: '', address: '', card: '' })

  CurrentUser = this.user.asObservable()

  constructor() { }

  updateUser(user: User) {
    this.user.next(user);

  }
}
