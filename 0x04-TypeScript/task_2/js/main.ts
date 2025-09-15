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

// ✅ Expected output
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
