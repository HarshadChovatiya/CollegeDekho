import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { crud1Component } from './crud1.component';

describe('Crud1Component', () => {
  let component: crud1Component;
  let fixture: ComponentFixture<crud1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ crud1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(crud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
