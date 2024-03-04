import { Component, OnInit, ViewChild } from '@angular/core';
import Location from '../../models/Location';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { LocationDialogComponent } from '../../shared/location-dialog/location-dialog.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  providers: [LocationService]
})
export class LocationsComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>

  locations: Location[] = [];

  displayedColumns: string[] = ['locationStart','locationEnd','licensePlateCar', 'cpfLocator', 'actions'];

  constructor(
    public dialog: MatDialog,
    public locationService: LocationService
    ) {
      this.locationService.getLocations().subscribe(data => {
        console.log(data);
        this.locations = data
      })
    }

  ngOnInit(): void {

  }

  openDialog(locations: Location | null){
    const dialogRef = this.dialog.open(LocationDialogComponent, {
      data: locations != null ? locations : {
        id: '',
        locationStart: '',
        locationEnd: '',
        licensePlateCar: '',
        cpfLocator: ''
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        if (this.locations.map(p => p.id).includes(result.id)){
          this.locationService.updateLocations(result)
          .subscribe(data => {
            const index = this.locations.findIndex(p => p.id === data.id)
            this.locations[index] = data;
            this.table.renderRows();
          });
        }else{
          this.locationService.createLocations(result)
          .subscribe(data => {
            this.locations.push(data)
            this.table.renderRows();
          });
        }
      }
    });
  }

  updateLocation(location: Location){
    this.openDialog(location);
  }

  deleteLocation(id: number){
    this.locationService.deleteLocations(id)
    .subscribe(() => {
      this.locations = this.locations.filter(p=> p.id != id)
    });
  }
}
