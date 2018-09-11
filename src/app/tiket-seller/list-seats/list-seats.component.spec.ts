import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeatsComponent } from './list-seats.component';

describe('ListSeatsComponent', () => {
  let component: ListSeatsComponent;
  let fixture: ComponentFixture<ListSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
