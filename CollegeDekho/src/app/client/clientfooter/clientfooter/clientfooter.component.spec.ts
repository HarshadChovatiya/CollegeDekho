import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfooterComponent } from './clientfooter.component';

describe('ClientfooterComponent', () => {
  let component: ClientfooterComponent;
  let fixture: ComponentFixture<ClientfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
