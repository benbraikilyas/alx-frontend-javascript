interface Teacher {
    readonly firstName: string;           // only set when initialized
    readonly lastName: string;            // only set when initialized
    fullTimeEmployee: boolean;             // always defined
    yearsOfExperience?: number;             // optional
    location: string;                       // always defined
  
    [key: string]: any;                     // allow any other attributes
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  