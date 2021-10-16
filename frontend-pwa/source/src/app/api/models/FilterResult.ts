/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Document } from './Document';

export type FilterResult = {
    start?: number;
    rows?: number;
    num_pages?: number;
    current_page?: number;
    documents?: Array<Document>;
}