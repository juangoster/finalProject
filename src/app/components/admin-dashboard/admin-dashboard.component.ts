import { Component, inject } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  private service = inject(CoursesService)

  courses = toSignal (this.service
    .getCourses()
    .pipe(catchError(err=>{
      console.log(err);
      return of([])
    })))

    deleteCourse(){
      return
    }
}
