import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBYComponent } from './group-by.component';

describe('GroupBYComponent', () => {
  let component: GroupBYComponent;
  let fixture: ComponentFixture<GroupBYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
