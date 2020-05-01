import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesinglepageComponent } from './collegesinglepage.component';

describe('CollegesinglepageComponent', () => {
  let component: CollegesinglepageComponent;
  let fixture: ComponentFixture<CollegesinglepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesinglepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
