import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  header: string[] | undefined;
  btn: string = 'button';
  getquote: string = 'Log out';
  teglinelogo: string = '../assets/../assets/images/tagline.png';
  lable: any[] = [
    {
      label: 'ourservice',
      link: '/casestady',
    },
    {
      label1: 'technology',
      link: '/technology',
    },
    {
      label2: 'user',
      link: '/technology',
    },
    {
      label3: 'view',
      link: '/technology',
    },
  ];
  constructor(private router:Router) {}

  ngOnInit(): void {}

  logout(){
    localStorage.removeItem('username');
    this.router.navigateByUrl("")
  }
}
