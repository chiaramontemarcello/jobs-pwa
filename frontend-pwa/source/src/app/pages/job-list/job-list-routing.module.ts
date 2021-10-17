import { JobDetailsPage } from './../job-details/job-details.page';
import { JobDetailsComponent } from './../../components/job-details/job-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListPage } from './job-list.page';

const routes: Routes = [
    {
        path: '',
        component: JobListPage,
    },
    {
        path: ':id',
        loadChildren: () =>
            import('../job-details/job-details.module').then((m) => m.JobDetailsPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JobListPageRoutingModule {}
