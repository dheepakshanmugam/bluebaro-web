import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFileService {
  private packageData: any[]= [ {
    name: 'Curtains', 
    price: 2500,
    description:'DTODEXPRESS 213.3 cm (7 ft) Net Semi Transparent Door Curtain',
    image:'assets/curtain.jpg',
    data:'DEFAULT'
  },
    {
      name: 'Blinds', 
      price: 1700,
      description:'FLORA Roller Blind Cord Drawn On Window (Bamboo)',
      image:'assets/blind.jpg',
      data:'DEFAULT'
     }, {
      name: 'Shutters', 
      price: 4000,
      description:'8*3 ft SS Window shutter',
      image:'assets/shutter.jpg',
      data:'DEFAULT'
     }, {
      name: 'Curtains', 
      price: 2100,
      description:'HOMEMONDE 213.36 cm (7 ft) Cotton Door Curtain (Pack Of 2)  (Self Design, Beige)',
      image:'assets/curtain1.jpg',
      data:'DEFAULT'
     }, {
      name: 'Blinds', 
      price: 2500,
      description:'Coversun Roller Blind Hand Drawn On Window  (Polyester)',
      image:'assets/blind1.jpg',
      data:'DEFAULT'
     },{
      name: 'Shutters', 
      price: 5500,
      description:'Full height window rolling shutter',
      image:'assets/shutter1.jpg',
      data:'DEFAULT'
     }
  ];
  constructor() { 
    
  }
  getData(): Observable<any[]> {
    return of(this.packageData);
  }

  addData(newItem: any): void {
    this.packageData.push(newItem);
  }

  addDataAtIndex(newItem: any, index: number): void {
    if (index >= 0 && index < this.packageData.length) {
      this.packageData.splice(index, 1, newItem);
    } else {
    }
  }
  
}
