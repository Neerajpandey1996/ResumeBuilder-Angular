import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExprDetailComponent } from './work-expr-detail.component';

describe('WorkExprDetailComponent', () => {
  let component: WorkExprDetailComponent;
  let fixture: ComponentFixture<WorkExprDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExprDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExprDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
