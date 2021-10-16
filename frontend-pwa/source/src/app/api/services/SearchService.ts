/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterResult } from '../models/FilterResult';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Serach for a job with filters
     * @param location Status values that need to be considered for filter
     * @param rows Status values that need to be considered for filter
     * @param query Status values that need to be considered for filter
     * @param employmentGradeMin Status values that need to be considered for filter
     * @param employmentGradeMax Status values that need to be considered for filter
     * @returns FilterResult OK
     * @throws ApiError
     */
    public static async getByFilters(
location?: string,
rows?: number,
query?: string,
employmentGradeMin?: number,
employmentGradeMax?: number,
): Promise<FilterResult> {
        const result = await __request({
            method: 'GET',
            path: `/search`,
            query: {
                'location': location,
                'rows': rows,
                'query': query,
                'employment-grade-min': employmentGradeMin,
                'employment-grade-max': employmentGradeMax,
            },
        });
        return result.body;
    }

}