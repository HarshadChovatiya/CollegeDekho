import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud5Component } from './crud5.component';

describe('Crud5Component', () => {
  let component: Crud5Component;
  let fixture: ComponentFixture<Crud5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
