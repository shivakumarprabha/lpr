import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelprComponent } from './createlpr.component';

describe('CreatelprComponent', () => {
  let component: CreatelprComponent;
  let fixture: ComponentFixture<CreatelprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
