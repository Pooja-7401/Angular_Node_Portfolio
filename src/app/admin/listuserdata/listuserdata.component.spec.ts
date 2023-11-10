import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserdataComponent } from './listuserdata.component';

describe('ListuserdataComponent', () => {
  let component: ListuserdataComponent;
  let fixture: ComponentFixture<ListuserdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListuserdataComponent]
    });
    fixture = TestBed.createComponent(ListuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
