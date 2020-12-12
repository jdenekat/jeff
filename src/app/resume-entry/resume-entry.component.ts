import { Component, Input, OnInit } from '@angular/core';
import { ResumeEntry } from '../models/resume-entry.model';
import { ResumeSection } from '../models/resume-section.model';

@Component({
  selector: 'app-resume-entry',
  templateUrl: './resume-entry.component.html',
  styleUrls: ['./resume-entry.component.css']
})
export class ResumeEntryComponent implements OnInit {
  @Input() entry: ResumeEntry;
  @Input() section: ResumeSection;

  constructor() { }

  ngOnInit() {
  }

  isLink(item: string): boolean {
    return item.startsWith('link:');
  }

  linkHref(item: string): string {
    const link = item.substr(5);
    const args = link.split('|');
    return args[1];
  }

  linkText(item: string): string {
    const link = item.substr(5);
    const args = link.split('|');
    return args[0];
  }
}
