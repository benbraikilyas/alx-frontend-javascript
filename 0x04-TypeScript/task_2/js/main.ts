interface Teacher {
  workTeacherTasks: () => string;
}

interface Director {
  workDirectorTasks: () => string;
}

function createEmployee(salary: number): Teacher | Director {
  if (salary < 500) {
    return { workTeacherTasks: () => "Getting to work" };
  } else {
    return { workDirectorTasks: () => "Getting to director tasks" };
  }
}

// ✅ Type predicate function
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ✅ executeWork function
function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}


executeWork(createEmployee(200));
executeWork(createEmployee(1000));



type Subjects = "Math" | "History";


export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}


console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
