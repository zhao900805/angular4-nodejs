import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserByCategoryComponent } from './user-by-category.component';

describe('UserByCategoryComponent', () => {
  let component: UserByCategoryComponent;
  let fixture: ComponentFixture<UserByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
