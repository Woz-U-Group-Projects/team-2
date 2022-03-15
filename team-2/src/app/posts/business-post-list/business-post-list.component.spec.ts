import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPostListComponent } from './business-post-list.component';

describe('BusinessPostListComponent', () => {
  let component: BusinessPostListComponent;
  let fixture: ComponentFixture<BusinessPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
