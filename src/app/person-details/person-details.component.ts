import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from "../people.service";


@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;
  sub: any;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting person with id: ', id);
      this.peopleService
        .get(id)
        .subscribe(p => this.person = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(): void{
    let link = ['/persons'];
    this.router.navigate(link);
  }

  savePersonDetails():void {
    this.peopleService.save(this.person);
  }

}
