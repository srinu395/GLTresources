import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationdashboardComponent } from './informationdashboard.component';

describe('InformationdashboardComponent', () => {
  let component: InformationdashboardComponent;
  let fixture: ComponentFixture<InformationdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
