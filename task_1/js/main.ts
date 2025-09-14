// Teacher class with readonly name properties and dynamic attributes support
class Teacher {
  // Readonly properties - can only be set during initialization
  readonly firstName: string;
  readonly lastName: string;
  
  // Required properties
  fullTimeEmployee: boolean;
  location: string;
  
  // Optional property
  yearsOfExperience?: number;
  
  // Index signature to allow any additional attributes
  [key: string]: any;
  
  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    additionalAttributes?: Record<string, any>
  ) {
    // Set readonly properties (only modifiable during initialization)
    this.firstName = firstName;
    this.lastName = lastName;
    
    // Set required properties
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    
    // Set optional property if provided
    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
    
    // Add any additional attributes dynamically
    if (additionalAttributes) {
      Object.assign(this, additionalAttributes);
    }
  }
  
  // Method to add dynamic attributes after initialization
  addAttribute(key: string, value: any): void {
    this[key] = value;
  }
  
  // Method to get full name
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  // Method to display teacher info
  getTeacherInfo(): string {
    const experience = this.yearsOfExperience ? ` with ${this.yearsOfExperience} years of experience` : '';
    const employmentType = this.fullTimeEmployee ? 'Full-time' : 'Part-time';
    return `${this.getFullName()} - ${employmentType} teacher in ${this.location}${experience}`;
  }
}

// Example usage:
console.log('=== Teacher Class Examples ===\n');

// Example with object literal syntax
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('Teacher 3 (Object Literal):');
console.log(teacher3);
console.log(''); // Empty line for spacing

// Example 1: Basic teacher with required properties
const teacher1 = new Teacher(
  'John',
  'Smith',
  true,
  'New York'
);

console.log('Teacher 1:', teacher1.getTeacherInfo());
console.log('Teacher 1 Full Name:', teacher1.getFullName());

// Example 2: Teacher with optional yearsOfExperience
const teacher2 = new Teacher(
  'Sarah',
  'Johnson',
  false,
  'California',
  5
);

console.log('\nTeacher 2:', teacher2.getTeacherInfo());

// Example 3: Teacher with additional attributes during initialization
const teacher4 = new Teacher(
  'Michael',
  'Brown',
  true,
  'Texas',
  10,
  {
    contract: true,
    subject: 'Mathematics',
    department: 'Science',
    salary: 65000
  }
);

console.log('\nTeacher 4 (Constructor):', teacher4.getTeacherInfo());
console.log('Teacher 4 Contract:', teacher4.contract);
console.log('Teacher 4 Subject:', teacher4.subject);
console.log('Teacher 4 Department:', teacher4.department);
console.log('Teacher 4 Salary:', teacher4.salary);

// Example 5: Adding attributes dynamically after initialization
const teacher5 = new Teacher(
  'Emily',
  'Davis',
  true,
  'Florida'
);

// Add dynamic attributes
teacher5.addAttribute('contract', false);
teacher5.addAttribute('certification', 'PhD in Education');
teacher5.addAttribute('languages', ['English', 'Spanish']);

console.log('\nTeacher 5:', teacher5.getTeacherInfo());
console.log('Teacher 5 Contract:', teacher5.contract);
console.log('Teacher 5 Certification:', teacher5.certification);
console.log('Teacher 5 Languages:', teacher5.languages);

// Example 6: Direct property assignment (also works due to index signature)
teacher5.phoneNumber = '+1-555-0123';
teacher5.email = 'emily.davis@school.edu';

console.log('Teacher 5 Phone:', teacher5.phoneNumber);
console.log('Teacher 5 Email:', teacher5.email);

// Demonstrate that firstName and lastName are readonly
console.log('\n=== Readonly Property Demonstration ===');
console.log('Original name:', teacher1.getFullName());

// The following would cause TypeScript compilation errors:
// teacher1.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property
// teacher1.lastName = 'Doe';   // Error: Cannot assign to 'lastName' because it is a read-only property

// But other properties can be modified:
teacher1.fullTimeEmployee = false;
teacher1.location = 'Boston';
teacher1.yearsOfExperience = 3;

console.log('After modifications:', teacher1.getTeacherInfo());
console.log('Name remains unchanged:', teacher1.getFullName());

// Example of type checking
console.log('\n=== Property Types ===');
console.log('firstName type:', typeof teacher1.firstName);
console.log('lastName type:', typeof teacher1.lastName);
console.log('fullTimeEmployee type:', typeof teacher1.fullTimeEmployee);
console.log('location type:', typeof teacher1.location);
console.log('yearsOfExperience type:', typeof teacher1.yearsOfExperience);
