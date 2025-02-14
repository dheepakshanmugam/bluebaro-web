import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFileService } from 'src/app/data-file.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  status:any[]
  wasFormChanged = false;
  disable: boolean = false;
  public breakpoint: number; // Breakpoint observer code
  packageData: any = {};
  disablePassword: boolean = false;
  id:any
  action:any=[]
  editData:any
 loginUserType:any
 disableStatus:boolean = false
 activityData:any=[]
 currentPage = 0;
 pageSize: number = 10;
 totalElements: number = 0;
 startIndex: number=0;
 endIndex: number = 0;
 displayedColumns = ['headingName', 'type','action'];
 isPackageExist:boolean;
 editName:any;
isSaveButtonDisable:boolean = false;
checkNameTimeOut:any;
  file: any;
  data: {}
  myObject: any;

  productQty: number = 1;
  maxQty: number = 10;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _router: Router,  
    private dataFileService: DataFileService,  
    ) {
      }

  ngOnInit() {
    this.dataFileService.getData().subscribe((data: any) => {
      this.myObject = data;  
    });
    this.activatedRoute.paramMap.subscribe(params => {
      debugger
      const dataParam = params.get('data');
      if (dataParam) {
        const decodedData = decodeURIComponent(dataParam);
        this.data = JSON.parse(decodedData);
        debugger
        if(!!this.data){
          this.action = 'EDIT'
        }
        
      }
      else{
        this.action = 'ADD'
      }
    });
  }
  increaseQty() {
    if (this.productQty < this.maxQty) {
      this.productQty++;
    }
  }
  decreaseQty() {
    if (this.productQty > 1) {
      this.productQty--;
    }
  }

  isEmpty(obj: any): boolean {
    return !obj || Object.keys(obj).length === 0;
  }

  addToCart(data:any){
    this.data['quantity'] = this.productQty
    console.log(this.data);
    this._router.navigate([`/app/product-list/view`, JSON.stringify(data)]);
  }

}
