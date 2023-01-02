import { Component, OnInit } from '@angular/core';
// import { Data, } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
interface Data{
  id: number;
  name: string;
}
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
private viewId!:number;
public viewdetail!:Data
  constructor(private activatedRoute:ActivatedRoute ,private dataServiceService:DataServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response:any)=>{
      if(response){
        this.viewId=response.id;
      }
    });
    this.dataServiceService.list.find((res:any)=>{
      if(res.id==this.viewId){
        this.viewdetail=res
      }
    })
  }

}
