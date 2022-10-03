import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { LogoutComponent } from '../logout/logout.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  name: string = '';
  id: string = '';
  surname: string = '';
  email: string = '';
  userlogged: any;
  updateUserForm!: FormGroup;
  emailInvalid: boolean = false;
  IDInvalid: boolean = false;
  constructor(
    private UsersService: UsersService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAllUsers();
    this.getMyUser();
    this.updatingUserForm();
  }

  updatingUserForm(): void {
    this.updateUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      id: ['', Validators.required],
    });
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

  deleteUser() {
    this.UsersService.delete(this.id).subscribe((item) => {
      this.id = '';
      this.getAllUsers();
    });
  }

  updateUser() {
    console.log(this.id);
    this.UsersService.update(
      this.updateUserForm.value.id,
      this.updateUserForm.value
    ).subscribe((data: any) => {
      this.users.id = this.updateUserForm.value.id;
      this.getAllUsers();
    });
  }
}
