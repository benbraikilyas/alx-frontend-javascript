import { RowID, RowElement } from './interface';

// Declare the global CRUD object (provided by the JS runtime)
declare const CRUD: {
  insertRow(row: RowElement): RowID;
  deleteRow(rowId: RowID): void;
  updateRow(rowId: RowID, row: RowElement): RowElement;
};

// Create a row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert and receive a new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row by adding age: 23
const updatedRow: RowElement = CRUD.updateRow(newRowID, { ...row, age: 23 });

// call updateRow with the updatedRow and then delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// optional usage
console.log(newRowID);
console.log(updatedRow);
