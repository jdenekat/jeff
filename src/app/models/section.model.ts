import { ModelHelper } from './model-helper';

export class Section {
  private _name: string;
  private _description: string;
  private _entries: string[];

  get name(): string { return this._name; }
  set name(value: string) { this._name = ModelHelper.evalText(value); }

  get description(): string { return this._description; }
  set description(value: string) { this._description = ModelHelper.evalText(value); }

  get entries(): string[] { return this._entries; }
  set entries(values: string[]) {
    for (let i = 0; i < values.length; i++) {
      this.add(values[i]);
    }
  }

  get isEmpty(): boolean {
    if (!this._name) { return true; }
    if (!this._description && ! this.hasEntries) { return true; }
    return false;
  }

  get hasEntries(): boolean {
    if (!this._entries) { return false; }
    if (this._entries.length === 0) { return false; }
    for (let i = 0; i < this._entries.length; i++) {
      if (this._entries[i].length > 0) {
        return true;
      }
    }
    return false;
  }

  clear() { this._entries = []; }

  add(entry: string) {
    entry = ModelHelper.evalText(entry);
    if (entry) {
      if (!this._entries) { this._entries = []; }
      this._entries.push(entry);
    }
  }

  remove(entry: string) {
    if (!this._entries) { return; }
    entry = ModelHelper.evalText(entry);
    if (entry) {
      const idx = this._entries.indexOf(entry);
      if (idx >= 0) {
        this._entries.splice(idx, 1);
      }
    }
  }
}
