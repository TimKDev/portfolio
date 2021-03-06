import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSectionComponent } from './start-section/start-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { HeaderComponent } from './header/header.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { StoryComponent } from './story/story.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartSectionComponent,
    SkillSectionComponent,
    ProjectSectionComponent,
    AboutMeSectionComponent,
    ContactMeSectionComponent,
    HeaderComponent,
    SkillComponent,
    ProjectComponent,
    StoryComponent,
    FooterComponent,
    ImprintComponent,
    LegalNoticeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
