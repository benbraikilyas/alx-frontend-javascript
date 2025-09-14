export interface Teacher {
  readonly firstName: string;      // يمكن تعيينها فقط عند الإنشاء
  readonly lastName: string;       // يمكن تعيينها فقط عند الإنشاء
  fullTimeEmployee: boolean;       // يجب أن يكون دائماً موجود
  yearsOfExperience?: number;      // اختياري
  location: string;                // يجب أن يكون دائماً موجود
  [key: string]: any;              // يسمح بإضافة أي خصائص إضافية مثل contract
}

// مثال على استخدام Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // خاصية إضافية
  bonus: 1000       // يمكن إضافة أي خاصية أخرى
};

console.log(teacher3);
