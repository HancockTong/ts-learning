export const numberVal: number = 0;

export const booleanVal: boolean = true;

export const stringVal: string = 'string';

export let inferredNumberVal = 1;
inferredNumberVal = 2;      // OK
// inferredNumberVal = '1';    // Error

export const numbers: number[] = [0, 1, 2];
numbers.push(3);            // OK
// numbers.push('4');          // Error

export const numberOrStringList: Array<number | string> = [];
numberOrStringList.push(0, '1', 2, '3');