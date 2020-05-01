import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeuserComponent } from './subscribeuser.component';

describe('SubscribeuserComponent', () => {
  let component: SubscribeuserComponent;
  let fixture: ComponentFixture<SubscribeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
