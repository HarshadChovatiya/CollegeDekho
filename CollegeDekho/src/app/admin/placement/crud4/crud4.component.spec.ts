import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud4Component } from './crud4.component';

describe('Crud4Component', () => {
  let component: Crud4Component;
  let fixture: ComponentFixture<Crud4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
