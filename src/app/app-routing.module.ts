import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'readinglist',
    component: ReadingListComponent
  },
  {
    path: 'coverletter',
    component: CoverLetterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
