import { ModelHelper } from './model-helper';
import { Reference } from './reference.model';

export class ResumeReferences {
  references: Reference[];
  private _title: string;

  get title(): string { return this._title; }
  set title(value: string) { this._title = ModelHelper.evalText(value); }

  isEmpty(): boolean {
    if (!this._title || !this.references) { return true; }
    if (this.references.length === 0) { return true; }
    for (let i = 0; i < this.references.length; i++) {
      if (!this.references[i].isEmpty) {
        return false;
      }
    }
    return true;
  }
}
