import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  openPage(val: string) {
    if(val === 'P') {
      this.router.navigate(['buildPersonalPortfolio'], {relativeTo: this.route});
    } else {
      this.router.navigate(['buildBusinessPortfolio'], {relativeTo: this.route});
    }
  }

}
