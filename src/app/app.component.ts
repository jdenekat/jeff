import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { Reference } from './models/reference.model';
import { ResumeContact } from './models/resume-contact.model';
import { ResumeEntry } from './models/resume-entry.model';
import { ResumeObjective } from './models/resume-objective.model';
import { ResumeReferences } from './models/resume-references.model';
import { ResumeSection } from './models/resume-section.model';
import { ResumeSkills } from './models/resume-skills.model';
import { Resume } from './models/resume.model';
import { Section } from './models/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  resume: Resume;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];

    this.resume = this.buildResume();
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} with link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  private buildResume(): Resume {
    const resume = new Resume();
    resume.contact = this.buildContact();
    resume.objective = this.buildObjective();
    resume.skills = this.buildSkills();
    resume.experience = this.buildExperience();
    resume.education = this.buildEducation();
    resume.codeSamples = this.buildCodeSamples();
    return resume;
  }

  private buildContact(): ResumeContact {
    const contact = new ResumeContact();
    contact.name = 'Jeff Marcus';
    contact.email = 'jeff@denekat.com';
    contact.address = '10275 W. 35th Ave., Wheat Ridge  CO  80033';
    contact.phone1 = '303-274-1663';
    contact.phone2 = '720-480-8187';
    contact.web = 'http://jeff.denekat.com';
    return contact;
  }

  private buildObjective(): ResumeObjective {
    const objective = new ResumeObjective();
    objective.title = 'OBJECTIVE';
    objective.objective = `Work with cloud, web, and server technologies at a forward-thinking company.`;
    return objective;
  }

  private buildSkills(): ResumeSkills {
    const skills = new ResumeSkills();
    skills.title = 'SKILLS';
    const langs = new ResumeEntry();
    langs.title = 'Languages';
    langs.description = `C#, SQL, HTML, JS/Typescript, Python, CSS/SASS`;
    const tech = new ResumeEntry();
    tech.title = 'Technologies';
    tech.description = `Angular, .NET Core, ASP.NET Core, MVC/MVVM, Web Services/REST, Azure,
      AKS, NServiceBus, Docker, Kubernetes, Helm, Git, GitHub Actions`;
    const data = new ResumeEntry();
    data.title = 'Database';
    data.description = `SQL Server, Postgres, ADO.NET, SSIS`;
    const procs = new ResumeEntry();
    procs.title = 'Process/Test';
    procs.description = `Agile, TDD, NUnit, FIT, tsqlUnit, Jasmine/Protractor`;
    const certs = new ResumeEntry();
    certs.title = 'Certification';
    certs.description = `MCSD.NET, BrainBench "Master" level in C# and ASP.NET.`;
    skills.skills = [ langs, tech, data, procs, certs];
    return skills;
   }

   private buildExperience(): ResumeSection {
     const experience = new ResumeSection();
     experience.title = 'EXPERIENCE';
     const terumo = this.buildTerumoExp();
     const sketchup = this.buildSketchupExp();
     const smundi = this.buildSalveMundiExp();
     const tbg = this.buildBornhoftExp();
     const cqg = this.buildCqgExp();
     const sierra = this.buildSierraExp();
     const privCon = this.buildPrivConsExp();
     const joblink = this.buildJoblinkExp();
     const agsim = this.buildAgsimExp();
     const uofa = this.buildUofAExp();
     const arch = this.buildArchitectExp();
     experience.entries = [ terumo, sketchup, smundi, tbg, cqg, sierra, privCon, joblink, agsim, uofa, arch ];
     return experience;
   }

   private buildTerumoExp(): ResumeEntry {
     const terumo = new ResumeEntry();
     terumo.location = 'Terumo BCT';
     terumo.title = 'Senior Software Engineer';
     terumo.start = new Date(2019, 11, 1);
     terumo.toPresent = true;
     const tWeb = new Section();
     tWeb.entries = [
       `Working with NServiceBus microservices, Postgres databases and
        containerized deployments on Azure/AKS using Docker and Helm.`,
       `Angular 9+ front end work for client-facing web sites.`,
       `Developed common Angular library components including respository template.`,
       `CI/CD pipeline using GitHub Actions and Powershell scripts.`,
       `Delivered ARM7 application for use on a medical device including bash test scripts.`,
       `Mentoring other developers in Angular and styling, mentoring QA in web testing.`,
       `Visual Studio, VSCode, PgAdmin, Git, Angular, SQL, Typescript, C#, Docker, K8S, Helm`,
       `Agile, SAFE, Scrum`
     ];
     terumo.sections = [ tWeb ];
     return terumo;
   }

   private buildSketchupExp(): ResumeEntry {
     const sketchup = new ResumeEntry();
     sketchup.location = 'Sketchup';
     sketchup.title = 'Senior Software Engineer';
     sketchup.start = new Date(2017, 7, 1);
     sketchup.end = new Date(2019, 11, 1);
     const sWeb = new Section();
     sWeb.entries = [
       `Working with 3D Warehouse front end team.  Re-write and re-design of 3D warehouse site in
        Typescript/Vue from Clojure.  Also working with Python scripts on backend.  Some exposure
        to AWS.  Writing design documents as needed, work with UX, backend and project management
        to completely revise every part of the warehouse while introducing many new features.`,
        `VSCode, Git, Vue, Foundation Sites, Typescript, Python`,
        `Agile, SAFE, Scrum`,
        `link:3dwarehouse|https://3dwarehouse.sketchup.com`
     ];
     sketchup.sections = [ sWeb ];
     return sketchup;
   }

   private buildSalveMundiExp(): ResumeEntry {
      const smundi = new ResumeEntry();
      smundi.location = 'Salve Mundi Development';
      smundi.title = 'Owner/Consultant/Developer/Architect/Secretary';
      smundi.start = new Date(2015, 8, 1);
      smundi.end = new Date(2017, 7, 1);
      smundi.description = '';
      const smWeb = new Section();
      smWeb.entries = [
        `Design, implement and deploy web site for game administration at salvemundi.com, password required.
        Typescript/AngularJS/Bootstrap, Azure resources (Web App, Web Jobs and Services in C#, CDN, data model,
        SQL databases, stored procedures).`,
        'Design and implement graphical game engine.',
        'Design, implement and deploy game test pages and game data editors under the administrative site.',
        'Design, implement and deploy translator services and features under the administrative and game pages.',
        'Ongoing consulting for Bornhoft Group as needed.',
        `Administration of business including incorporation, accounting, banking, maintaining accounts and services
        such as WebPurify, Postmark, MSDN, Azure.`
      ];
      smundi.sections = [ smWeb ];
      return smundi;
   }

   private buildBornhoftExp(): ResumeEntry {
      const bornhoft = new ResumeEntry();
      bornhoft.location = 'The Bornhoft Group';
      bornhoft.title = 'Chief Software Engineer/Architect';
      bornhoft.start = new Date(2007, 2, 1);
      bornhoft.end = new Date(2015, 7, 1);
      const bData = new Section();
      bData.name = 'Data';
      bData.entries = [
        'Develop data model for all business data and requirements.',
        `Write, test and maintain parsers for various 3rd party data sources including FCM statements,
        fund administrators, bonds and treasuries valuation.`,
        'Write data exporters for third party consumers and business partners.',
        'Write stored procedures for data import, selection, edit and normalization.',
        'Write SSIS package to acquire and transform data between a legacy Fox Pro source and SQL Server.',
        'Develop internal tools for data transfer, acquisition, edit and validation.',
        `Develop affiliation rules and procedures to limit visibilty of data to users based on their affiliation
        with various database entities.`,
        'RESTful web services to integrate with third party work flow tool.'
      ];
      const bReporting = new Section();
      bReporting.name = 'Reporting';
      bReporting.entries = [
        `Develop intranet (ASP.NET) providing business and accounting reports to internal users using network
        authentication and authorization.  Heavy use of Silverlight 5 transitioned to AngularJS.`,
        'Client facing web site (ASP.NET/AngularJS/Bootstrap)'
      ];
      const bAnalysis = new Section();
      bAnalysis.name = 'Analysis';
      bAnalysis.description = `WPF chart/graphics application.  Bar charts, line charts, overlays, scrolling,
      magnification, tree maps, complext position queries and business logic in T-SQL delivered by RESTful
      services using WebAPI 2.`;
      const bArch = new Section();
      bArch.name = 'Architecture';
      bArch.description = `Designed databases, interface tools, implemented cloud resources.`;
      bornhoft.sections = [bData, bReporting, bAnalysis, bArch];
      return bornhoft;
   }

   private buildCqgExp(): ResumeEntry {
    const cqg = new ResumeEntry();
    cqg.location = 'CQG, Inc.';
    cqg.title = 'Senior Software Developer, Project Manager';
    cqg.start = new Date(1996, 10, 1);
    cqg.end = new Date(2006, 8, 1);
    const cqgSection = new Section();
    cqgSection.entries = [
      `Delivered a next generation News server.  The server side of the project was notable for being delivered
      on time and having no defects.  Real time data processing.  Acquire messages from source, process, store,
      forward to authorized recipients.  C#, NUnit, FIT, SQL Server 2005.`,
      `Designed new team process using FIT, TDD and SDD.  Provided workshop and demonstraton to other teams about
      FIT and SDD technologies.  Designed and implemented a tool for metrics gathering for the new process.
      ASP.NET, C#, NUnit, FIT, SQL Server 2005.`,
      `Worked on New Client, a large scale C# .NET project designed to replace the legacy product.  Worked on server
      team for parsing exchange data in real time.  Implemented an optimized feature to save tics for unknown
      instruments in real time.  C#, NUnit, SQL Server 2005, Web Services.`,
      `Designed and implmented the CQG Middle Office data reporting system.  This was the fist product deployed by
      CQG using .NET and written in C#.  Solo effort.  C#, NUnit, SQL Server 2000, SFTP`,
      `Designed and implemented the Gateway Test Harness, a script-based end-to-end test engine that could perform
      both logical and performance testing of the Gateway trading platform.  C++, cppUnit, SQL Server 2000.`,
      `Managed early implementation of the CQG Gateway electronic trading platform.  This platform as first written
      in Java with J2EE and BEA WebLogic with an Oracle back-end.  Re-written in C++ using SQL Server 2000.  Authored
      DTD for client server data exchange in XML.`,
      `Designer, lead developer, then manager of AccountTracker project.  This feature was an outgrowth of saving
      option strategies and marked the first time that CQG stored and analyzed trade information.  Integrated
      account tracking with electronic trading.  C++, cppUnit.`,
      `Lead developer for Advanced Options development.  Created new Advanced Options feature for CQG legacy product,
      designed new views.  Included design of a new "Strategy View" which used rules to create, modigy, analyze, and
      store options strategies.  Led a team of 4 other developers, all Russian.  C++, MSDE, Access.`,
      `Created new Options models and calculator enhancements.  Implemented Black, Merton, and Whaley models.
      Abstracted the exiting options model class and views to support multiple models.  C++.`,
      `Implemented Blau studies, a set of mathematical formulae for technical analysis of futures.  C++.`
    ];
    cqg.sections = [cqgSection];
    return cqg;
   }

   private buildSierraExp(): ResumeEntry {
      const sierra = new ResumeEntry();
      sierra.location = 'Sierra Expressway Airline';
      sierra.title = 'Computer Systems Manager';
      sierra.start = new Date(1994, 9, 1);
      sierra.end = new Date(1996, 7, 1);
      sierra.description = `A small commuter airline startup in Oakland, CA.  HP Unix system with 3rd party airline
      software.  Responsible for the acquisition of hardware, installation, configuration and implemenation of
      software.  Extended software to include a credit card reporting system and a weather data distribution
      module.  C, Unix.`;
      return sierra;
   }

   private buildPrivConsExp(): ResumeEntry {
      const privCon = new ResumeEntry();
      privCon.location = 'Consultant';
      privCon.start = new Date(1993, 6, 1);
      privCon.end = new Date(1994, 9, 1);
      privCon.description = `Worked with a variety of graphics intensive applications for the delivery of recruiting
      data.  Customized screen savers for commercial applications.  C, C++, Windows.`;
      return privCon;
   }

   private buildJoblinkExp(): ResumeEntry {
      const joblink = new ResumeEntry();
      joblink.location = 'Joblink';
      joblink.title = 'Software Developer';
      joblink.start = new Date(1989, 7, 1);
      joblink.end = new Date(1993, 6, 1);
      joblink.description = `Operated the Joblink remote data system, wrote graphical version of the original product
      under DOS (from Hypercard), extended existing software, introduced new products for college recruitment and
      recruitment advertising.  C, C++, DOS, Windows.`;
      return joblink;
   }

   private buildAgsimExp(): ResumeEntry {
      const agsim = new ResumeEntry();
      agsim.location = 'AGSIM';
      agsim.title = 'Director of Software Projects, Placement Office';
      agsim.start = new Date(1988, 3, 1);
      agsim.end = new Date(1989, 6, 1);
      agsim.description = `American Graduate School of International Management, Glendale, Arizona.  Continued the
      development of Unicore with an emphasis on options for ancillary placement office operations.  C, DOS, Windows.`;
      return agsim;
   }

   private buildUofAExp(): ResumeEntry {
      const uofa = new ResumeEntry();
      uofa.location = 'University of Arizona';
      uofa.title = 'Software Developer';
      uofa.start = new Date(1983, 2, 1);
      uofa.end = new Date(1988, 3, 1);
      uofa.description = `Worked in the College Placement Office.  Designed, wrote, operated, maintained and distributed
      a comprehensive college placement system known as Unicore.  For several years, Unicore was the most widely used
      college placement software in the country.  It had a large, configurable feature set, including an advanced
      scheduling algorithm, jobs bulletin generator, a range of bidding systems, and customized data management for
      placement office functions.  Managed and mentored a variety of student interns.  C, DOS.`;
      return uofa;
   }

   private buildArchitectExp(): ResumeEntry {
      const arch = new ResumeEntry();
      arch.location = 'Architecture Office';
      arch.title = 'Draftsman/Assistant';
      arch.start = new Date(1981, 3, 1);
      arch.end = new Date(1983, 3, 1);
      arch.description =
      `Responsible for drafting various types of plans: foundation, floor, electrical, plumbing, roof.
      Drafting elevations, sections and details.
      Presentation drawings and perspectives.
      Provide computer graphics to select clients.
      Miscellaneous drawings and documentation.`;
      return arch;
   }

   private buildEducation(): ResumeSection {
    const education = new ResumeSection();
    education.title = 'EDUCATION';

    const school = new ResumeEntry();
    school.location = 'University of Arizona';
    school.title = 'BA, English Literature and History';
    school.start = new Date(1976, 8, 1);
    school.end = new Date(1981, 2, 1);
    school.description = `English honors.  A variety of electives included FORTRAN, Assembly, COBOL,
    Calculus, Economics, and one year in the Architecture College professional program.`;

    education.entries = [ school ];
    return education;
   }

   private buildCodeSamples(): ResumeSection {
     const samples = new ResumeSection();
     samples.title = 'CODE SAMPLES';

     const tangram = new ResumeEntry();
     tangram.location = 'Tangram';
     tangram.title = 'Innovative implementation of a Trangram game';
     tangram.description =
       `As far as I know, this is the only Tangram game to derive the level of
        puzzle difficulty from a mathematical scoring algorithm.  It also has
        over 1500 puzzles in its catalog.  Angular with Material.`;
     const tSect = new Section();
     tSect.entries = [
       'link:Tangram sample|http://tangram.denekat.com',
     ];
     tangram.sections = [ tSect ];

     const mmind = new ResumeEntry();
     mmind.location = 'Mastermind';
     mmind.title = 'Mastermind experiment with Wizard';
     mmind.description =
       `Mastermind is a code breaking puzzle game based on the much older bulls and cows
        pencil and paper game.  The object is to break a code consisting of a color sequence.
        This implementation has an experimental Wizard to provide hints.  Angular.`;
     const msect = new Section();
     msect.entries = [
       `link:Mastermind sample|http://chix.denekat.com`
     ];
     mmind.sections = [ msect ];

     const books = new ResumeEntry();
     books.location = 'Books';
     books.title = 'Site for my self-published books';
     books.description =
       `I am writing a series of books.  One has been published, two more are close to
       completion, and a fourth is partially written.  The idea of this site is to provide
       the user a glimpse of the background material that inevitabley accrues while writing.`;
     const bsect = new Section();
     bsect.entries = [
       `link:Books sample|http://books.denekat.com`
     ];
     books.sections = [ bsect ];

     const dcal = new ResumeEntry();
     dcal.location = 'Calendar';
     dcal.title = 'Timeline and calendar utility for my book series';
     dcal.description =
       `Realizing that the timelines are important, and having the books based on a fictitious
       culture with a unique lunisolar calendar, I wrote a utility to help me edit and
       visualize timelines and keep track of the lunisolar years and months and track moon phases, which have
       particular meaning in the books.  Angular.`;
     const dsect = new Section();
     dsect.entries = [
       `link:Mythical calendar sample|http://diotimacalendar.denekat.com`
     ];
     dcal.sections = [ dsect ];

     samples.entries = [ tangram, mmind, books, dcal ];
     return samples;
   }

   private buildReferences(): ResumeReferences {
     const refs = new ResumeReferences();
     refs.title = 'REFERENCES';

     const rb = new Reference();
     rb.name = 'Richard Bornhoft';
     rb.email = 'rbornhoft@bornhoftgroup.com';
     rb.phones = '303-572-1000';
     rb.description = `Rich Bornhoft is the founder and owner of The Bornhoft Group, a futures fund management
     company.  Rich is a pioneer in the field of managed futures and recipient of numerous awards both for
     fund performance and for lifetime contributions to the field.`;

     const bb = new Reference();
     bb.name = 'Brian Bell';
     bb.email = 'bbell@cts-am.com';
     bb.phones = '303-941-4207';
     bb.description = `Brian Bell was a colleague at CQG, Inc., where we were both software developers.
     Later, he was a manager at Bornhoft Group.  Brian has extensive technical knowledge of trading and
     advising in the financial industry.`;

     const dp = new Reference();
     dp.name = 'Darryl Popke';
     dp.email = 'djamespopke@gmail.com';
     dp.phones = '720-635-6169';
     dp.description = `I worked with Darryl as a colleague at CQG when we were both software developers.
     Later, he became CTO and was an indirect manager.`;

     const ep = new Reference();
     ep.name = 'Ernesto Prado';
     ep.email = 'ernesto_prado23@hotmail.com';
     ep.phones = '303-501-5956';
     ep.description = `Ernesto rose to the level of Director of Research at Bornhoft Group.  He dealt with
     compliance issues, due diligence, and other means of vetting commodity traders and funds.  Our work
     frequently intersected around data issues and internal tools.`;

     const xz = new Reference();
     xz.name = 'Xiaochun Zhou';
     xz.email = 'zxcspring@gmail.com';
     xz.phones = '303-847-1292';
     xz.description = `Xiaochun is now a senior software developer in Boston.  I hired her at Bornhoft Group
     and managed her for about a year until her project was turned over to another business entity.`;

     refs.references = [ rb, bb, dp, ep, xz ];
     return refs;
   }
}
