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
  userlogged: any;
  constructor(private UsersService: UsersService) {}
  ngOnInit(): void {
    this.getAllUsers();
    this.getMyUser();
  }

  getMyUser(): void {
    this.UsersService.userLogged().subscribe((data) => {
      this.userlogged = data;
    });
  }

  getAllUsers(): void {
    this.UsersService.getAll().subscribe((data) => {
      this.users = data.items;
    });
  }
  searchUser() {
    this.UsersService.search(this.id).subscribe((item) => {
      this.users = [item];
    });
  }
  resetSearch() {
    this.getAllUsers();
    this.id = '';
  }
}
