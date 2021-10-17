import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document, SearchService, FilterResult } from 'src/app/api';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.page.html',
    styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {
    jobs: Document[];

    filterResult: FilterResult;

    constructor(private searchService: SearchService, private router: Router) {}

    ngOnInit() {
        this.searchService.getByFilters('Zurich').subscribe((res) => {
            this.jobs = res.documents;
        });
    }

    openDetails(job: Document) {
        console.log(job);
        this.router.navigate(['test']);
    }
}
