import { Component, Inject, OnInit } from '@angular/core';
import Location from '../../models/Location';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrl: './location-dialog.component.scss'
})
export class LocationDialogComponent implements OnInit {

  isChange!: boolean;

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location,
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
