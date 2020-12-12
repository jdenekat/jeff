import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeReferencesComponent } from './resume-references.component';

describe('ResumeReferencesComponent', () => {
  let component: ResumeReferencesComponent;
  let fixture: ComponentFixture<ResumeReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
