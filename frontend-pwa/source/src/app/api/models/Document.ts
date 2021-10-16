/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkExperience } from './WorkExperience';

export type Document = {
    age?: number;
    job_id?: string;
    title?: string;
    company_name?: string;
    preview?: string;
    work_experience?: Array<WorkExperience>;
    publication_date?: string;
    place?: string;
    employment_position_ids?: Array<number>;
    is_active?: boolean;
    is_paid?: boolean;
    images?: {
url?: string,
};
}