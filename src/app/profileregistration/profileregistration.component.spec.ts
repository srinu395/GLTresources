import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileregistrationComponent } from './profileregistration.component';

describe('ProfileregistrationComponent', () => {
  let component: ProfileregistrationComponent;
  let fixture: ComponentFixture<ProfileregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
