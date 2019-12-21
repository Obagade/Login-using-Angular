import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   clicked() {
    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var correctUser = "test";
    var correctPassword = "123";

    if( correctUser = user &&  correctPassword )  {

            alert("You are logged in as " + user);
            open("https://www.nl-it-consulting.de/");
        } else {
            alert ("Incorrect username or password");
        }
    }
}
