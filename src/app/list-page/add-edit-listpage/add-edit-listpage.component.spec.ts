import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditListpageComponent } from './add-edit-listpage.component';

describe('AddEditListpageComponent', () => {
  let component: AddEditListpageComponent;
  let fixture: ComponentFixture<AddEditListpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditListpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditListpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
