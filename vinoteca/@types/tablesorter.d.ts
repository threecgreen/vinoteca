// Type definitions for tablesorter
// GitHub repo: https://github.com/Mottie/tablesorter
// These definitions are incomplete

/// <reference path="../node_modules/@types/jquery/index.d.ts" />

declare namespace Tablesorter {
    /** Options passed to tablesorter widgets. */
    interface WidgetOptions {
        /** extra css class name (string or array) added to the filter element (input or select)
         *  select needs a "browser-default" class or it gets hidden
        */
        filter_cssFilter: string[];
        filter_ignoreCase: boolean;
        /** Reset filters button */
        filter_reset: string;
        /** Save most recent filters in cookies between refreshes. */
        filter_saveFilters: boolean;
    }

    /** Options passed to tablesorter property. */
    export interface TablesorterOptions {
        /** CSS Themes */
        theme: string;
        /** Whether the table width is fixed */
        widthFixed: boolean;
        /** List of names of widgets */
        widgets: string[];
        /** Options for widgets listed above */
        widgetOptions: WidgetOptions;
    }

    /** Options passed to tablesorterPager property. */
    export interface PagerOptions {
        /** Target the pager markup. */
        container: JQuery;
        /** Target the pager page select dropdown used to choose a page. */
        cssGoto: string;
        /** remove rows from the table to speed up the sort of large tables.
         *  setting this to false, only hides the non-visible rows; needed if you
         *  plan to add/remove rows with the pager enabled.
        */
        removeRows: boolean;
        /** Rows per page */
        size: number;
    }

    /** Tablesorter storage property used for storing data in cookies. */
    interface Storage {
        (table: HTMLElement, variableName: string, values?: any[]): any;
    }

    /** Main Tablesorter interface. */
    interface Tablesorter {
        storage: Storage;
        (options?: Tablesorter.TablesorterOptions): JQuery;
    }

    /** Implements paging for Tablesorter tables. */
    interface TablesorterPager {
        (options?: Tablesorter.PagerOptions): JQuery;
    }
}

interface JQuery {
    tablesorter: Tablesorter.Tablesorter;
    tablesorterPager: Tablesorter.TablesorterPager;
}

interface JQueryStatic {
    tablesorter: Tablesorter.Tablesorter;
}
