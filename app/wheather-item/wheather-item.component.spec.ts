import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherItemComponent } from './wheather-item.component';

describe('WheatherItemComponent', () => {
  let component: WheatherItemComponent;
  let fixture: ComponentFixture<WheatherItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
