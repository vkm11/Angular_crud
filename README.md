
# Angular_CRUD 

1. Install Angular CLI
:- npm i @angular/cli

2. Create new Angular app
:- ng new admin

3. Angular material
:- ng add @angular/material

4. Run the app
:- serve

5. Generate common module -> layout
:- ng g c module layout

6. Generate common component
:- ng g c header
   ng g c sidebar
   ng g c footer

7. Import the common module -> layout into App Module
 
src/app$ ng g module users
cd users
users$
- ng g c list-users 
- ng g c view-users
- ng g c add-user
- ng g c edit-user
- ng g c delete-user





* when you fill adduser form and submit then you can check network it is created successfully ore not 
- status code is 201 then it is created sussfully it means resource created succssfully.

- after submit the form alert msg is shown and automatic exit
👍 then you have to write this code then it will be automatically exit

users.module.ts:-

import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration:2500}}
  ]










# Admin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
