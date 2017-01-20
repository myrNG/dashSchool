/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VueListingComponent } from './vue-listing.component';

describe('VueListingComponent', () => {
  let component: VueListingComponent;
  let fixture: ComponentFixture<VueListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
