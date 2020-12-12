import { Component, OnInit, Input } from '@angular/core';
import { ResumeReferences } from '../models/resume-references.model';

@Component({
  selector: 'app-resume-references',
  templateUrl: './resume-references.component.html',
  styleUrls: ['./resume-references.component.css']
})
export class ResumeReferencesComponent implements OnInit {
  @Input() references: ResumeReferences;
  @Input() title = 'References';

  constructor() { }

  ngOnInit() {
  }
}
