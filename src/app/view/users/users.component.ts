import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import User from '../../models/User';
import { UserDialogComponent } from '../../shared/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>

  users: User[] = [];

  displayedColumns: string[] = ['firstName','lastName','email','cpf', 'actions'];

  constructor(
    public dialog: MatDialog,
    public userService: UserService
    ) {
      this.userService.getUsers().subscribe(data => {
        console.log(data);
        this.users = data
      })
    }

  ngOnInit(): void {

  }

  openDialog(user: User | null){
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: user != null ? user : {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        cpf: ''
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        if (this.users.map(p => p.id).includes(result.id)){
          this.userService.updateUsers(result)
          .subscribe(data => {
            const index = this.users.findIndex(p => p.id === data.id)
            this.users[index] = data;
            this.table.renderRows();
          });
        }else{
          this.userService.createUsers(result)
          .subscribe(data => {
            this.users.push(data)
            this.table.renderRows();
          });
        }
      }
    });
  }

  updateUser(user: User){
    this.openDialog(user);
  }

  deleteUser(id: number){
    this.userService.deleteUsers(id)
    .subscribe(() => {
      this.users = this.users.filter(p=> p.id != id)
    });
  }
}
