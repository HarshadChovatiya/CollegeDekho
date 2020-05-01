import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcollegesComponent } from './showcolleges.component';

describe('ShowcollegesComponent', () => {
  let component: ShowcollegesComponent;
  let fixture: ComponentFixture<ShowcollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
