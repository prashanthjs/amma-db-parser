declare module 'amma-db-parser/index' {
	import Plugin = require('amma-plugin-loader'); let plugin: Plugin.IPluginLoader;
	export = plugin;

}
declare module 'amma-db-parser/services/db.parser' {
	import Mongoose = require('mongoose');
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
	export class DbParser implements IDbParser {
	    schema: Mongoose.Schema;
	    page: number;
	    pageSize: number;
	    sort: any;
	    filter: any;
	    skip: number;
	    constructor(schema?: Mongoose.Schema);
	    parse(options: IOptions): void;
	    parseAndReturnFilters(filters: IFilters[] | IFilters, logic?: string): Object;
	    parseAndReturnFilter(filter: IFilter): Object;
	    parseAndReturnSort(sorts: ISort[] | ISort): Object;
	    getParsedObject(key: string): any;
	    getType(field: string): string;
	    parseAndReturnValue(field: string, value: any, operator?: string): any;
	}
	export default class FactoryClass {
	    getDbParser(schema?: Mongoose.Schema): DbParser;
	}

}
declare module 'amma-db-parser' {
	import main = require('amma-db-parser/index');
	export = main;
}
