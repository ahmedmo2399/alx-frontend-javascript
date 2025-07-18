// task_3/js/crud.d.ts
/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

export declare function insertRow(row: RowElement): RowID;

export declare function deleteRow(rowId: RowID): void;

export declare function updateRow(rowId: RowID, row: RowElement): RowID;
