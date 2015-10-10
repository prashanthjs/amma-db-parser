export interface IFilter {
    field: string;
    operator?: string;
    value: any;
}
export interface ISort {
    field: string;
    dir?: string;
}
export interface IFilters {
    filter: IFilter[] | IFilter;
    logic?: string;
}
export interface IOptions {
    filter?: string | IFilters[] | IFilters;
    page?: number | string;
    pageSize?: number | string;
    skip?: number | string;
    sort?: string | ISort[] | ISort;
    take?: number | string;
}
export interface IDbParser {
    schema: Object;
    page: number;
    pageSize: number;
    sort: any;
    filter: any;
    skip: number;
    parse(options: IOptions): void;
    parseAndReturnFilters(filters: IFilters[] | IFilters, logic?: string): Object;
    parseAndReturnFilter(filter: IFilter): Object;
    parseAndReturnSort(sorts: ISort[] | ISort): Object;
    getParsedObject(field: string): any;
    getType(field: string): string;
    parseAndReturnValue(field: string, value: any, operator?: string): any;
}
export declare class DbParser implements IDbParser {
    schema: Object;
    page: number;
    pageSize: number;
    sort: any;
    filter: any;
    skip: number;
    constructor(schema?: Object);
    parse(options: IOptions): void;
    parseAndReturnFilters(filters: IFilters[] | IFilters, logic?: string): Object;
    parseAndReturnFilter(filter: IFilter): Object;
    parseAndReturnSort(sorts: ISort[] | ISort): Object;
    getParsedObject(field: string): any;
    getType(field: string): string;
    parseAndReturnValue(field: string, value: any, operator?: string): any;
}
export default class FactoryClass {
    getDbParser(schema?: Object): DbParser;
}
