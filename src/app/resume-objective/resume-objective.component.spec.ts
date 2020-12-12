import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeObjectiveComponent } from './resume-objective.component';

describe('ResumeObjectiveComponent', () => {
  let component: ResumeObjectiveComponent;
  let fixture: ComponentFixture<ResumeObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
