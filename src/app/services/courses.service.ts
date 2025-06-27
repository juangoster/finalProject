import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, timeout } from 'rxjs';
import { Course } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private http:HttpClient=inject(HttpClient)
  private baseURL:string="localhost:8084/course";

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseURL)
    .pipe(
      timeout(3000),
      catchError(err=>{
        console.log("error retrieve courses ", err);
        throw new Error ("error courses")
      })
    )
  }

  updateCourse(id:number):Observable<Course[]>{
    return this.http.put<Course[]>(this.baseURL, id)
    .pipe(
      timeout(3000),
      catchError(err=>{
        console.log("error updating course ", err);
        throw new Error ("update error")
      })
    )
  }
 
}
