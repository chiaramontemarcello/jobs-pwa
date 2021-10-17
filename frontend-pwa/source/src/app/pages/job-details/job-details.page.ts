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
    pensum: string;

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
                    this.setPensumString();
                });
            }
        });
    }

    setPensumString() {
        const pensum = this.job.employment_grades;
        if (pensum.length === 1) {
            this.pensum = pensum[0] + ' %';
        } else {
            this.pensum = pensum[0] + ' - ' + pensum[pensum.length - 1] + '%';
        }
    }
}
