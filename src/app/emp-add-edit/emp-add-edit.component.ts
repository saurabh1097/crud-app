import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {

  qualification = ["under graduate","post graduate","phd"]
  empForm: FormGroup

  constructor(private _fb:FormBuilder){
    this.empForm =this._fb.group({
      fname:"",lname:"",dob:'',gender:'',edu:'',company:'',exp:'',pkg:'',email:''
    })
  }


  onSubmit(){
      console.log(this.empForm.value);
  }
}
