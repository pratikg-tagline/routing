import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 header:string[] | undefined;
btn:string="button"
getquote:string="GetGuote"
teglinelogo:string="../assets/../assets/images/tagline.png"
lable:string[]= ['casestady','aboutus','aboutus','technology','industry']
  constructor() { }

  ngOnInit(): void {

  }

}
