
export interface Teacher {
  readonly firstName: string;      // Can only be set at creation
  readonly lastName: string;       // Can only be set at creation
  fullTimeEmployee: boolean;       // Must always be present
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be present
  [key: string]: any;             // Allows adding any additional properties like contract
}

// Example of using Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // Additional property
  bonus: 1000       // Any other property can be added
};

console.log(teacher3);

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// example usage:
console.log(printTeacher('John', 'Doe')); // -> J. Doe
