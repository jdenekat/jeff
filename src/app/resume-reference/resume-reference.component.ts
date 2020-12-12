import { Component, Input, OnInit } from '@angular/core';
import { Reference } from '../models/reference.model';

@Component({
  selector: 'app-resume-reference',
  templateUrl: './resume-reference.component.html',
  styleUrls: ['./resume-reference.component.css']
})
export class ResumeReferenceComponent implements OnInit {
  @Input() reference: Reference;

  constructor() { }

  ngOnInit() {
  }

}
