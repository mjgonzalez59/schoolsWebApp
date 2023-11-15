export class Enrollment {
  id: number;
  schoolId: number;
  studentId: string;
  schoolGroupId: number;
  grade: number;
  year: number;

  constructor(id: number, schoolId: number, studentId: string, schoolGroupId: number, grade: number, year: number){
    this.id = id;
    this.schoolId = schoolId;
    this.studentId = studentId;
    this.schoolGroupId = schoolGroupId;
    this.grade = grade;
    this.year = year;
  }
}