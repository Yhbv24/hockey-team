# Hockey Team
### By Ash Laidlaw

## Project Goals

The goal of this project is to familiarize myself with Angular and Firebase. The app is a hockey team manager, which will allow the manager to keep track of the players, managing staff, and sort players by their position.

## Technologies Used

* HTML
* CSS
* JavaScript
* Angular 2
* Bootstrap
* Firebase

## Production Steps

1. Using Angular CLI, run `ng new hockey-team`
2. Add Bower and Bootstrap to project
3. Add file with Firebase information
   * Manually create file `api-keys.ts` in the app folder and add to .gitignore
4. Create Member object with properties:
   * First name (string)
   * Last name (string)
   * Role (string)
   * Position (string)
   * Age
   * `ng g c class member` - Create model for Member object
5. Create form for administrator to enter a new player/staff member
   * `ng g c new-member` - Form and methods associated with instantiating new Member object
6. Create a router to allow for site navigation
   * Manually create file `app.routing.ts` in the app folder
7. Create some sort of interface (table, list, etc.) which will show the members that have been entered
   * `ng g c member-list` - Methods to show members
8. Allow user to edit the members, which will update members
   * `ng g c edit-meal` - Form and methods associated with editing a member
9. Allow user to sort the members by role (forwards, staff, etc.)
   * `ng g pipe sort-member` - Create a pipe to allow administrator to selectively show members with certain critera
10. Allow user to delete a member
   * `ng g c delete-member` - Delete button which will remove an instance of a member

## Clone/Build

1. Clone the project from `https://github.com/Yhbv24/hockey-team`.
2. Navigate into the project folder.
3. Run `npm install`, then `bower install`, then run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

OR

* Navigate to `https://hockey-team-40f05.firebaseapp.com/` in your browser.
