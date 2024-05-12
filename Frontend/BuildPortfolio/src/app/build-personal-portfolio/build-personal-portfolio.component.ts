import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-personal-portfolio',
  templateUrl: './build-personal-portfolio.component.html',
  styleUrls: ['./build-personal-portfolio.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BuildPersonalPortfolioComponent implements OnInit, AfterViewInit {

  optionalAndMandatorySections : any = ['Mandatory Details', 'Profile Photo', 'Contact Details', 'Primary Skills', 'Professional Experience', 'Projects', 'Achievements', 'Certifications', 'Education', 'Personal Details']
  currentSections : any = ['Mandatory Details', 'Profile Photo', 'Contact Details', 'Primary Skills', 'Professional Experience', 'Projects', 'Achievements', 'Certifications', 'Education', 'Personal Details']
  modalVisible = true;
  expandCollapse : any = [];
  deleteSection : any = [];
  defaultButton = true;

  constructor() { 
    for(let i = 1; i < 10; i++)
      this.deleteSection[i] = true;

    for(let i = 0; i < 10; i++)
      this.expandCollapse[i] = false;
  }

  ngOnInit(): void {
    this.defaultButton = true;
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      //alert("We have added some mandatory and optional sections. You could rename & reuse them or else remove and add your own sections.");
    }, 400);
  }

  close(val: number) {
    // close val
    this.expandCollapse[val] = false;
  }

  open(val: number) {
    // close all
    for(let i = 0; i < 10; i++)
      this.expandCollapse[i] = false;

    // open val
    this.expandCollapse[val] = true;
  }

  deleteSec(val: number) {
    console.log(val);
    // delete all data of expandable div of section present in XYZ
    
    // delete val
    this.deleteSection[val] = false;
    
    this.defaultButton = false;
  }

  addDefaultSections() {
    for(let i = 1; i < 10; i++)
      this.deleteSection[i] = true;

    this.defaultButton = true;
  }

  resetData(val: number) {
    // corresponding to val, reset all values
  }

}
