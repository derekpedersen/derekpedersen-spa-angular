import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';

import { HobbiesModule } from './hobbies/hobbies.module';
import { ProgrammingModule } from './programming/programming.module';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'hobbies', loadChildren: HobbiesFactory },
    { path: 'programming', loadChildren: ProgrammingFactory },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export function HobbiesFactory(){
    return HobbiesModule
}

export function ProgrammingFactory(){
    return ProgrammingModule
}