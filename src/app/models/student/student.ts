export class Student {

  id: string;
  name: string;
  birthDate: string;
  schoolId: number;

  constructor(id: string, name: string, birthDate: string, schoolId: number){
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.schoolId = schoolId;
  }

}