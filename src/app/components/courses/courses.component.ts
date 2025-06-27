import { Component, inject } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  private service = inject(CoursesService)

  courses = toSignal (this.service
    .getCourses()
    .pipe(catchError(err=>{
      console.log(err);
      return of([])
    })))

}
