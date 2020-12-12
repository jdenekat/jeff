import { Component, OnInit, Input } from '@angular/core';
import { ResumeObjective } from '../models/resume-objective.model';

@Component({
  selector: 'app-resume-objective',
  templateUrl: './resume-objective.component.html',
  styleUrls: ['./resume-objective.component.css']
})
export class ResumeObjectiveComponent implements OnInit {
  @Input() objective: ResumeObjective;

  constructor() { }

  ngOnInit() {
  }
}
