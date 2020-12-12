import { Component, OnInit, Input } from '@angular/core';
import { ResumeContact } from '../models/resume-contact.model';

@Component({
  selector: 'app-resume-contact',
  templateUrl: './resume-contact.component.html',
  styleUrls: ['./resume-contact.component.css']
})
export class ResumeContactComponent implements OnInit {
  @Input() contact: ResumeContact;

  constructor() { }

  ngOnInit() {
  }



}
