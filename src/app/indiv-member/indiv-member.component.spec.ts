import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivMemberComponent } from './indiv-member.component';

describe('IndivMemberComponent', () => {
  let component: IndivMemberComponent;
  let fixture: ComponentFixture<IndivMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
