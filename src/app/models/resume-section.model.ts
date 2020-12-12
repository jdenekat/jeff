import { Resume } from './resume.model';
import { ResumeEntry } from './resume-entry.model';
import { ModelHelper } from './model-helper';

export class ResumeSection {
  private _title: string;
  entries: ResumeEntry[];
  resume: Resume;

  get title(): string { return this._title; }
  set title(value: string) { this._title = ModelHelper.evalText(value); }

  get present(): string {
    return this.resume ? this.resume.present : 'present';
  }
}
