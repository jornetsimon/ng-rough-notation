import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoughNotationGroupComponent } from './rough-notation-group.component';

describe('RoughNotationGroupComponent', () => {
  let component: RoughNotationGroupComponent;
  let fixture: ComponentFixture<RoughNotationGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoughNotationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughNotationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
