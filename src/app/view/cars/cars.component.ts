import { Component, OnInit, ViewChild } from '@angular/core';
import Car from '../../models/Car';
import { CarDialogComponent } from '../../shared/car-dialog/car-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CarService } from '../../services/cars.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
  providers: [CarService]
})
export class CarsComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>

  cars: Car[] = [];

  displayedColumns: string[] = ['brandCar','modelCar','colorCar','licensePlateCar', 'actions'];

  constructor(
    public dialog: MatDialog,
    public carService: CarService
    ) {
      this.carService.getCars().subscribe(data => {
        console.log(data);
        this.cars = data
      })
    }

  ngOnInit(): void {

  }

  openDialog(car: Car | null){
    const dialogRef = this.dialog.open(CarDialogComponent, {
      data: car != null ? car : {
        id: '',
        brandCar: '',
        modelCar: '',
        colorCar: '',
        licensePlateCar: ''
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined){
        if (this.cars.map(p => p.id).includes(result.id)){
          this.carService.updateCars(result)
          .subscribe(data => {
            const index = this.cars.findIndex(p => p.id === data.id)
            this.cars[index] = data;
            this.table.renderRows();
          });
        }else{
          this.carService.createCars(result)
          .subscribe(data => {
            this.cars.push(data)
            this.table.renderRows();
          });
        }
      }
    });
  }

  updateCar(car: Car){
    this.openDialog(car);
  }

  deleteCar(id: number){
    this.carService.deleteCars(id)
    .subscribe(() => {
      this.cars = this.cars.filter(p=> p.id != id)
    });
  }
}
