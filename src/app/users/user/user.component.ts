import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      //use this if you're 100% sure that is only 1 time
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    }

    //use this if your component reloads the params
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      })
  }

}
