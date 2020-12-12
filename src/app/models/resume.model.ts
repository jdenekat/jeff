import { ResumeContact } from './resume-contact.model';
import { ResumeObjective } from './resume-objective.model';
import { ResumeSkills } from './resume-skills.model';
import { ResumeSection } from './resume-section.model';
import { ResumeReferences } from './resume-references.model';

export class Resume {
  public contact: ResumeContact;
  public objective: ResumeObjective;
  public skills: ResumeSkills;
  private _experience: ResumeSection;
  private _education: ResumeSection;
  private _publications: ResumeSection;
  private _codeSamples: ResumeSection;
  private references: ResumeReferences;
  public other: ResumeSection[];
  public present = 'present';

  public get education(): ResumeSection { return this._education; }
  public set education(section: ResumeSection) { section.resume = this; this._education = section; }

  public get experience(): ResumeSection { return this._experience; }
  public set experience(section: ResumeSection) { section.resume = this; this._experience = section; }

  public get publications(): ResumeSection { return this._publications; }
  public set publications(section: ResumeSection) { section.resume = this; this._publications = section; }

  public get codeSamples(): ResumeSection { return this._codeSamples; }
  public set codeSamples(section: ResumeSection) { section.resume = this; this._codeSamples = section; }

  public add(section: ResumeSection) {
    if (!this.other) {
      this.other = [];
    }
    section.resume = this;
    this.other.push(section);
  }
}
