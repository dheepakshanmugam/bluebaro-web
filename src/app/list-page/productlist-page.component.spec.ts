import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistPageComponent } from '../list-page/productlist-page.component';

describe('ProductlistPageComponent', () => {
  let component: ProductlistPageComponent;
  let fixture: ComponentFixture<ProductlistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
