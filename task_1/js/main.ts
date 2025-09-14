export Teacher interface {
  firstName: string;     // يمكن تعيينها فقط عند الإنشاء
  lastName: string;      // يمكن تعيينها فقط عند الإنشاء
  fullTimeEmployee: boolean;      // يجب أن يكون دائماً موجود
  yearsOfExperience?: number;     // اختياري
  location: string;               // يجب أن يكون دائماً موجود
  [key: string]: any;             // يسمح بإضافة أي خصائص إضافية
}

// مثال على استخدام Teacher
const Teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // خاصية إضافية
};

console.log(Teacher);
