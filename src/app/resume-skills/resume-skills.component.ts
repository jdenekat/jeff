import { Component, OnInit, Input } from '@angular/core';
import { ResumeSkills } from '../models/resume-skills.model';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.css']
})
export class ResumeSkillsComponent implements OnInit {
  @Input() skills: ResumeSkills;

  constructor() { }

  ngOnInit() {
  }
}
