import { Component, Inject, OnInit } from '@angular/core';
import User from '../../models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent implements OnInit {

  isChange!: boolean;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ){}

  ngOnInit(): void{
    if(this.data.id != null){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
