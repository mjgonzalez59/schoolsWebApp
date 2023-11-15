import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment/enrollment';
import { Student } from 'src/app/models/student/student';

@Component({
  selector: 'app-enrollStudent',
  templateUrl: './enrollStudent.component.html',
  styleUrls: ['./enrollStudent.component.css']
})
export class EnrollStudentComponent implements OnInit {

  student: Student = new Student("3", "Student 3", "2004-11-10T19:39:47.714Z", 2);
  enrollment: Enrollment = new Enrollment(3, 2, "3", 1, 4, 2024);
  schools: string[] = ["School 1", "School 2", "School 3"];
  grades: string[] = ["Grade 1", "Grade 2", "Grade 3"];
  schoolsGroups: string[] = ["SchoolsGroup 1", "SchoolsGroup 2", "SchoolsGroup 3"];
  years: string[] = ["Year 1", "Year 2", "Year 3"];

  constructor() { }

  ngOnInit() {
  }

  
}
