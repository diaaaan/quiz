import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName: string;
  userId: number;
  users: User[];



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = 1;
    this.userName = '';
    this.getUsers();
  }

  addUser():void {

    if(this.userName.trim().length === 0) {
      return;
    }
   

    this.users.push({
      id: this.userId,
      name: this.userName
    })

    this.userId++;
    console.log('succ')
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

}
