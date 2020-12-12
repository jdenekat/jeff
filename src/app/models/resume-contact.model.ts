import { ModelHelper } from './model-helper';

export class ResumeContact {
  private _name: string;
  private _email: string;
  private _address: string;
  private _phone1: string;
  private _phone2: string;
  private _web: string;

  public get name(): string { return this._name; }
  public set name(value: string) { this._name = ModelHelper.evalText(value); }

  public get email(): string { return this._email; }
  public set email(value: string) { this._email = ModelHelper.evalText(value); }

  public get address(): string { return this._address; }
  public set address(value: string) { this._address = ModelHelper.evalText(value); }

  public get phone1(): string { return this._phone1; }
  public set phone1(value: string) { this._phone1 = ModelHelper.evalText(value); }

  public get phone2(): string { return this._phone2; }
  public set phone2(value: string) { this._phone2 = ModelHelper.evalText(value); }

  public get web(): string { return this._web; }
  public set web(value: string) { this._web = ModelHelper.evalText(value); }

  public get phones(): string {
    if (this._phone1 == null && this._phone2 == null && this._web == null) { return null; }
    let p = this._phone1 ? this._phone1 : '';
    if (this._phone2) {
      if (p.length > 0) { p += ', '; }
      p += this._phone2;
    }
    if (this._web) {
      if (p.length > 0) { p += ', '; }
      p += this._web;
    }
    return p;
  }
}
