import { ModelHelper } from './model-helper';

export class Reference {
  private _name: string;
  private _phones: string;
  private _email: string;
  private _description: string;

  get name(): string { return this._name; }
  set name(value: string) { this._name = ModelHelper.evalText(value); }

  get phones(): string { return this._phones; }
  set phones(value: string) { this._phones = ModelHelper.evalText(value); }

  get email(): string { return this._email; }
  set email(value: string) { this._email = ModelHelper.evalText(value); }

  get description(): string { return this._description; }
  set description(value: string) { this._description = ModelHelper.evalText(value); }

  public isEmpty(): boolean {
    if (this._name == null || this._description == null) { return true; }
    if (this._phones == null && this._email == null) { return true; }
    return false;
  }
}
