import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(['/servers']);
    // this.router.navigate(['/servers'], { relativeTo: this.activatedRoute });
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' })
    //<!-- http://localhost:4200/servers/5/edit?allowEdit=1#loading -->
  }

}
