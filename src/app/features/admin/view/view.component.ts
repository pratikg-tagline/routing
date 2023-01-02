import { Component, OnInit } from '@angular/core';
import {  Route, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
interface Data{
  id: number;
  name: string;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
views!:Data[];
list: any;
  constructor(private router:Router , private dataServiceService:DataServiceService) { }

  ngOnInit(): void {
    this.views=this.dataServiceService.list
  }
  viewprofile(viewId:number){
    if(viewId){
      this.router.navigateByUrl(`view/data/${viewId}`)
      console.log('viewId :>> ', viewId);
    }
  }

}
