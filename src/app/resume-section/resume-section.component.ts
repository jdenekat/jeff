import { Component, OnInit, Input } from '@angular/core';
import { ResumeSection } from '../models/resume-section.model';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {
  @Input() section: ResumeSection;

  constructor() { }

  ngOnInit() {
  }

}
