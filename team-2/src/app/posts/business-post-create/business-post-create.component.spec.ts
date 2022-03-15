import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPostCreateComponent } from './business-post-create.component';

describe('BusinessPostCreateComponent', () => {
  let component: BusinessPostCreateComponent;
  let fixture: ComponentFixture<BusinessPostCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPostCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
