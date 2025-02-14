import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFileService } from 'src/app/data-file.service';

@Component({
  selector: 'app-add-edit-listpage',
  templateUrl: './add-edit-listpage.component.html',
  styleUrls: ['./add-edit-listpage.component.scss']
})
export class AddEditListpageComponent implements OnInit {

  status:any[]
  packageForm: FormGroup;
  wasFormChanged = false;
  disable: boolean = false;
  public breakpoint: number;
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
  data: any   []
  myObject: any;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _router: Router,  
    private dataFileService: DataFileService,  
    ) {
      this.createForm();
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
        this.data = [JSON.parse(decodedData)];
        if(!!this.data){
          this.setItem(this.data)
          this.action = 'EDIT'
        }
        
      }
      else{
        this.action = 'ADD'
      }
    });
  }

  createForm() {
    this.packageForm = this.fb.group({
      name: [{ value:'', disabled: this.disable }, Validators.required],
      price: [{ value:'', disabled: this.disable },Validators.required],
      image: [{ value: '', disabled: this.disable }, Validators.required],
      description: [{ value: '', disabled: this.disable },Validators.required],
      data: [{ value: 'OPTION', disabled: this.disable }],

    });
  }
  setItem(data){
    this.packageForm.get('name').setValue(data[0].name)
    this.packageForm.get('price').setValue(data[0].price)
    this.packageForm.get('description').setValue(data[0].description)
  }
  
  loadpackagesById() {
    
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }


  savePackage() {
    if(this.packageForm.valid){
let datas = {}
let list : any = this.packageForm.value
for(let val of [list]){
  datas['name'] = val.name
  datas['price'] = val.price
  datas['image'] = this.file ? this.file : !!this.data && this.data[0].image
  datas['description'] = val.description
  if(this.data && this.data[0].image && !this.file && this.data[0].data == 'DEFAULT' ){
  datas['data']='DEFAULT'
  }
  else{
    datas['data'] = val.data
  }
}
  if(this.action == 'EDIT'){
    let matchingOldItem:any
    let val = this.myObject.map((item, index) => {
      matchingOldItem = this.data.findIndex(oldItem =>
        item.name === oldItem.name && item.price === oldItem.price &&
        item.description === oldItem.description
      );
      if (matchingOldItem != -1) {
        this.dataFileService.addDataAtIndex(datas, index);
      }

    });
}
else{
   this.dataFileService.addData(datas);
}
  this._router.navigateByUrl('app/product-list')
    }
  }

  closeDialog() {
    
  }

  addFile(event){
    if(event.target.files){
      this.file = event.target.files[0]
    }
  }



    isNameAlreadyExist = () => {
      
  }
  backBtn(){
    this._router.navigateByUrl('app/product-list')
  }
}
