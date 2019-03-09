// Declare a function
export function getData(list: string[]): string[] {
    return [];
}

export function setOtherData(...data: string[]): void {
    //do somthing
}

//Declare a function with callback
export function getDataWithFilter(list: string[], dataFilter?: (value: string) => boolean): string[] {
    if (typeof dataFilter === 'undefined') {
        dataFilter = Boolean;
    }

    return list.filter(dataFilter);
}

// Declare a function type by interface
export interface DataFilter {
    (value: string): boolean;
}

// Declare a function type by arrow function style
export type AnotherDataFilter = (value: string) => boolean;

export function getDataWithDataFilter(list: string[], dataFilter: DataFilter): string[] {
    return list.filter(dataFilter);
}
