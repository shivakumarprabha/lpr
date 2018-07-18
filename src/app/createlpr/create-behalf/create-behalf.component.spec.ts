import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBehalfComponent } from './create-behalf.component';

describe('CreateBehalfComponent', () => {
  let component: CreateBehalfComponent;
  let fixture: ComponentFixture<CreateBehalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBehalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBehalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
