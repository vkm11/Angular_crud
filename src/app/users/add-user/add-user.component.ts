import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private userServices: UserService,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl('')
    });
  }
  createUser() {
    this.userServices.addUser(this.addUserForm.value).subscribe(data => {
      // console.log('user created');
      this._snackBar.open("User created successfully");

    }, err => {
      // console.log(err);
      this._snackBar.open("Unable to create  user");
    })
  }
}
