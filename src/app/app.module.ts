import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeContactComponent } from './resume-contact/resume-contact.component';
import { ResumeObjectiveComponent } from './resume-objective/resume-objective.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { ResumeEntryComponent } from './resume-entry/resume-entry.component';

import 'hammerjs';
import { ResumeReferencesComponent } from './resume-references/resume-references.component';
import { ResumeReferenceComponent } from './resume-reference/resume-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ResumeComponent,
    ResumeContactComponent,
    ResumeObjectiveComponent,
    ResumeSkillsComponent,
    ResumeSectionComponent,
    ResumeEntryComponent,
    ResumeReferencesComponent,
    ResumeReferenceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
