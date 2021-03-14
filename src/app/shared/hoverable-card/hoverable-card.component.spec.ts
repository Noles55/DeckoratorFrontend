/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HoverableCardComponent } from './hoverable-card.component';

describe('HoverableCardComponent', () => {
  let component: HoverableCardComponent;
  let fixture: ComponentFixture<HoverableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
