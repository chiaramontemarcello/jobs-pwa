import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Document, SearchService } from 'src/app/api';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.page.html',
    styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
    defaultHref = 'jobs';
    job: Document;

    constructor(
        private searchService: SearchService,
        private activatedRoute: ActivatedRoute,
        public loadingController: LoadingController,
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((paramId) => {
            if (paramId.id) {
                this.searchService.getJob(paramId.id).subscribe((res) => {
                    this.job = res;
                });
            }
        });
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner: null,
            duration: 5000,
            message: 'Click the backdrop to dismiss early...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            backdropDismiss: true,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed with role:', role);
    }
}
