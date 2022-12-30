import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor() { }
  technologies: string[] = [
    'web',
    'mobile',
    'desktop',
    'plateform',
    'database',
    'bigdata',
    'machinelarning',
    'devops',
    'clouds',
  ];
  ngOnInit(): void {
  }

}
