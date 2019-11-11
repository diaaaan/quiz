import { Component, OnInit, Input } from '@angular/core';
import { USERS } from '../user-list';
import { User } from '../user';





@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  @Input() user: User;

  id = document.getElementById('1');

  users = USERS;
  
  constructor() { }

  ngOnInit() {
  }

  usersClick(){
    document.getElementById('1').textContent = 'x';
  }

}
 