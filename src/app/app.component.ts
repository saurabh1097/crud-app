import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  constructor(private dialog:MatDialog){

  }

  createEmployeeComponent(){
    this.dialog.open(EmpAddEditComponent);
  }


}
