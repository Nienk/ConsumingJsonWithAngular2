import {Component, OnInit} from '@angular/core';
import {Person} from '../person.model';
import {PeopleService} from '../people.service';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson : Person;
  errorMessage : string = '';
  isLoading : boolean = true;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(p => this.people = p,
      e => this.errorMessage = e,
        () => this.isLoading = false);
  }

  selectPerson(person : Person) {
    this.selectedPerson = person;
  }

}
