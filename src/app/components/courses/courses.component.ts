import { Component, inject } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet,RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, MatButtonModule, RouterOutlet, RouterLink, MatDividerModule],
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
