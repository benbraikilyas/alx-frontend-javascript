export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2) تنفيذ الفئتين
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

const emp1 = createEmployee(200);
console.log(emp1.workFromHome());    // Expected: "Cannot work from home"
console.log(emp1.getCoffeeBreak());  // Expected: "Cannot have a break"
console.log(executeWork(emp1));      // Expected: "Getting to work"

const emp2 = createEmployee(1000);
console.log(emp2.workFromHome());    // Expected: "Working from home"
console.log(emp2.getCoffeeBreak());  // Expected: "Getting a coffee break"
console.log(executeWork(emp2));      // Expected: "Getting to director tasks"

const emp3 = createEmployee('500');
console.log(emp3.workFromHome());