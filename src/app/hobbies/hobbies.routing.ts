import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HobbiesDefaultComponent } from './default/default.component';
import { SkateboardingComponent } from './skateboarding/skateboarding.component';
import { SkiingComponent } from './skiing/skiing.component';
import { HikingComponent } from './hiking/hiking.component';
import { HobbiesComponent } from './hobbies.component';

const routes: Routes = [
    {
        path: '',
        component: HobbiesComponent,
        children: [
          { path: '', component: HobbiesDefaultComponent },
          { path: 'skateboarding', component: SkateboardingComponent },
          { path: 'skiing', component: SkiingComponent },
          { path: 'hiking', component: HikingComponent },
          { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
     }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HobbiesRoutingModule { }