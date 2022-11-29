import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent {
  data:any=[]
  constructor(private api:ApiService){
    api.fetchData().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }

}
