import { ModelHelper } from './model-helper';

export class ResumeObjective {
  private _title: string;
  private _objective: string;

  get title(): string { return this._title; }
  set title(value: string) { this._title = ModelHelper.evalText(value); }

  get objective(): string { return this._objective; }
  set objective(value: string) { this._objective = ModelHelper.evalText(value); }

  get isEmpty(): boolean {
    if (this._title && this._title.length > 0) { return false; }
    if (this._objective && this._objective.length > 0) { return false; }
    return true;
  }
}
