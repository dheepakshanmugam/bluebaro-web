import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFileService } from 'src/app/data-file.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
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
  data:any =  {}
  myObject: any;

  productQty: number  = 0
  maxQty: number = 10;
  shippingCharges : number = 150
amount:number = 0
price:number = 0
isOrderPlaced = false;

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
        this.productQty = this.data.quantity
        debugger
        if(!!this.data){
          this.action = 'EDIT'
        }
        
      }
      else{
        this.action = 'ADD'
      }
    });
    this.getAmount()
  }
  increaseQty() {
    if (this.productQty < this.maxQty) {
      this.productQty++;
      this.getAmount()
    }
  }
  decreaseQty() {
    if (this.productQty > 1) {
      this.productQty--;
      this.getAmount()
    }
  }
  getAmount(){
   this.price =  this.productQty *  this.data.price
  this.amount = this.price + this.shippingCharges
  }
  isEmpty(obj: any): boolean {
    return !obj || Object.keys(obj).length === 0;
  }
  addToCart(data){
    this.isOrderPlaced = true;
  }
  continueShop(){
    this._router.navigateByUrl('app/product-list')
  }
  formatNumber(num: number): string {
    return num.toFixed(2);
  }
}
