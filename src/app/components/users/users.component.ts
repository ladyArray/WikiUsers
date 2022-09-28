import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  name: string = '';
  id: string = '';
  userlogged: string = '';
  user: any;
  constructor(private UsersService: UsersService) {
    this.UsersService.getAll().subscribe((data) => {
      this.users = data('results');
      console.log(this.users); //expect array with all users
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchUser() {
    this.UsersService.search(this.id).subscribe((item) => {
      console.log(item);
      this.user = item;
    });
  }
}
