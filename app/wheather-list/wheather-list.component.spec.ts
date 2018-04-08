import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherListComponent } from './wheather-list.component';

describe('WheatherListComponent', () => {
  let component: WheatherListComponent;
  let fixture: ComponentFixture<WheatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
