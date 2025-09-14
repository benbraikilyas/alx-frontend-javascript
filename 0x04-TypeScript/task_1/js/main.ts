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

export function printTeacher(firstName: string, lastName: string): string {
  const initial = firstName && firstName.length > 0 ? firstName[0].toUpperCase() : '';
  return `${initial}. ${lastName}`;
}


// example usage:
printTeacher('John', 'Doe'); // -> J. Doe
printTeacher('John', 'Doe'); // -> J. Doe

// Interface describing the constructor (how to create a student)
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Student class
export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Simple test
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());     // "John"
console.log(student.workOnHomework());  // "Currently working"
