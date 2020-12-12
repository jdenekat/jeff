import { ResumeEntry } from './resume-entry.model';
import { ModelHelper } from './model-helper';

export class ResumeSkills {
  private _title: string;
  skills: ResumeEntry[];

  get title(): string { return this._title; }
  set title(value: string) { this._title = ModelHelper.evalText(value); }

  get isEmpty(): boolean {
    if (!this._title || !this.skills) { return true; }
    if (this.skills.length === 0) { return true; }
    for (let i = 0; i < this.skills.length; i++) {
      if (!this.skills[i].isEmpty) {
        return false;
      }
    }
    return true;
  }
}
