import { Component, Inject, OnInit } from '@angular/core';
import Car from '../../models/Car';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrl: './car-dialog.component.scss'
})
export class CarDialogComponent implements OnInit{

  isChange!: boolean;

  constructor(
    public dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
  ){}

  ngOnInit(): void{
    if(this.data.id != null){
      this.isChange = false;
    }else{
      this.isChange = true;
    }
  }

  onCancel(){
    this.dialogRef.close();
  }
}


