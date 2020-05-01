import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud3Component } from './crud3.component';

describe('Crud3Component', () => {
  let component: Crud3Component;
  let fixture: ComponentFixture<Crud3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
