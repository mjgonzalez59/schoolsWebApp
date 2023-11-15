import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [
    {
      "id": "1",
      "name": "Student 1",
      "birthDate": "2003-11-10T00:00:00",
      "schoolId": 2
    },
    {
      "id": "2",
      "name": "Student 2",
      "birthDate": "2004-11-10T00:00:00",
      "schoolId": 2
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
