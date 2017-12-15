import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginElement } from './login.component'; 

describe('LoginElement', () => { 
  let component: LoginElement;
  let fixture: ComponentFixture<LoginElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginElement ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 