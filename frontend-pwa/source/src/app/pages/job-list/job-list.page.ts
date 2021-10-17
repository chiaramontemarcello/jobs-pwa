import { Component, OnInit } from '@angular/core';
import { Document, SearchService, FilterResult } from 'src/app/api';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.page.html',
    styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {
    jobs: Document[];

    filterResult: FilterResult;

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        this.searchService.getByFilters().subscribe((res) => {
            this.jobs = res.documents;
        });
    }
}
