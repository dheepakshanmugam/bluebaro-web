import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddEditListpageComponent } from './add-edit-listpage/add-edit-listpage.component';
import { Router } from '@angular/router';
import { DataFileService } from '../data-file.service'
@Component({
  selector: 'app-productlist-page',
  templateUrl: './productlist-page.component.html',
  styleUrls: ['./productlist-page.component.scss']
})
export class ProductlistPageComponent implements OnInit {
action = 'ADD'
  myObject: any;
  imageSrc: any;
  imageUrl: any;
  imageBoolean: boolean = false
  constructor( public dialog: MatDialog, private _router: Router,private dataService: DataFileService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.myObject = data;
      this.imageUrl = new Array(this.myObject.length).fill(null);
      this.loadImages();
    });
  }
  addProduct(){
    this._router.navigateByUrl('app/product-list/add');
  }
  loadImages(): void {
    this.myObject.forEach((item, index) => {
      if (this.imageUrl.length <= index) {
        this.imageUrl.length = index + 1;
      }
      if (item.image && item.image instanceof File && item.data === 'OPTION') {
        this.imageBoolean = false
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrl[index] = e.target.result;
        };
        reader.readAsDataURL(item.image);
      }
      else if (item.data === 'OPTION'){
        this.imageBoolean = true
      }
    });
  }
  editIcon(data: any) {
    this._router.navigate([`/app/product-list/edit`, JSON.stringify(data)]);
  }
  delete(index){
 this.myObject.splice(index,1)
  }
  viewData(data: any){
    this._router.navigate([`/app/product-list/list`, JSON.stringify(data)]);
  }
}

