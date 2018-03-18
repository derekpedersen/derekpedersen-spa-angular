import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammingDefaultComponent } from './default/default.component';

import { CsharpComponent } from './csharp/csharp.component'
import { ProgrammingComponent } from './programming.component';

const routes: Routes = [
    {
        path: '',
        component: ProgrammingComponent,
        children: [
            { path: '', component: ProgrammingDefaultComponent },
            { path: 'csharp', component: CsharpComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProgrammingRoutingModule { }