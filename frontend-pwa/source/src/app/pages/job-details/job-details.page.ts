import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.page.html',
    styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
    defaultHref = 'jobs';

    constructor(private location: Location) {}

    ngOnInit() {}

    goBack() {
        this.location.back();
    }
}
