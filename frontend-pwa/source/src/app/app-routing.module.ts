import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'job-list',
        pathMatch: 'full',
    },
    {
        path: 'job-list',
        loadChildren: () =>
            import('./pages/job-list/job-list.module').then((m) => m.JobListPageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
