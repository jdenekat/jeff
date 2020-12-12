import { Section } from './section.model';
import { ModelHelper } from './model-helper';

export class ResumeEntry {
  private _location: string;
  start: Date;
  private _end: Date;
  private _toPresent: boolean;
  private _title: string;
  private _description: string;
  sections: Section[];

  get location(): string { return this._location; }
  set location(value: string) { this._location = ModelHelper.evalText(value); }

  get title(): string { return this._title; }
  set title(value: string) { this._title = ModelHelper.evalText(value); }

  get description(): string { return this._description; }
  set description(value: string) { this._description = ModelHelper.evalText(value); }

  get toPresent(): boolean { return this._toPresent; }
  set toPresent(value: boolean) {
    this._toPresent = value;
    if (value) {
      this._end = null;
    }
  }

  get end(): Date { return this._end; }
  set end(value: Date) {
    this._end = value;
    if (this._end) {
      this._toPresent = false;
    }
  }

  get isEmpty(): boolean {
    // if (!this._location) { return true; }
    if (!this._title && !this._description && !this.hasSections) { return true; }
    return false;
  }

  get hasContent(): boolean {
    if (this._description) { return true; };
    return this.hasSections;
  }

  get hasSections(): boolean {
    if (this.sections == null) { return false; }
    if (this.sections.length === 0) { return false; }
    for (let i = 0; i < this.sections.length; i++) {
      if (!this.sections[i].isEmpty) {
        return true;
      }
    }
    return false;
  }
}
