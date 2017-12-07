/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularzComponent } from './formularz.component';

describe('FormularzComponent', () => {
  let component: FormularzComponent;
  let fixture: ComponentFixture<FormularzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
