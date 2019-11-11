import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './user-list';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
