import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../models/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input() resume: Resume;

  constructor() { }

  ngOnInit() {
  }
}
