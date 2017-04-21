import { Component } from '@angular/core';
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-root',
  providers: [PeopleService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Wars People';
}
