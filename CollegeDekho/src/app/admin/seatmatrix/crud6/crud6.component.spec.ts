import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud6Component } from './crud6.component';

describe('Crud6Component', () => {
  let component: Crud6Component;
  let fixture: ComponentFixture<Crud6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
