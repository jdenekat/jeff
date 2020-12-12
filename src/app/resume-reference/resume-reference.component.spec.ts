import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReferenceComponent } from './resume-reference.component';

describe('ResumeReferenceComponent', () => {
  let component: ResumeReferenceComponent;
  let fixture: ComponentFixture<ResumeReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
