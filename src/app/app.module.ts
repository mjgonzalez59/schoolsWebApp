import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollStudentComponent } from './components/enrollStudent/enrollStudent.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';


const appRoutes: Routes = [
  { path: "students", component: StudentsComponent },
  { path: "enrollStudent", component: EnrollStudentComponent }
]

@NgModule({
  declarations: [	
    AppComponent,
    EnrollStudentComponent,
    StudentComponent,
    StudentsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
