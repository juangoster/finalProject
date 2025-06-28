import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Course } from '../../utils/interfaces';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-create-form',
  imports: [
    ReactiveFormsModule, 
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  private build = inject(FormBuilder)
  private service = inject(CoursesService)
  private router=inject(Router)

  form=this.build.group({
    name: ['', [
      Validators.required, 
      Validators.maxLength(50), 
      Validators.pattern(/^[a-z,A-Z,\s]/)]],

    description: ['', [
      Validators.required, 
      Validators.maxLength(200), 
      Validators.pattern(/^[a-z,A-Z,\s]/)]],
    
    duration: ['', [
        Validators.required, 
        Validators.maxLength(50), 
        Validators.pattern(/^[a-z,A-Z,\s]/)]],

    level: ['', [
        Validators.required, 
        Validators.maxLength(30), 
        Validators.pattern(/^[a-z,A-Z,\s]/)]],
    
    price: [0 , [
      Validators.required,
      Validators.maxLength(10)
    ]]
  });

  submit(){
    let name =this.form.controls.name.value!;
    let duration =this.form.controls.duration.value!;
    let level =this.form.controls.level.value!;
    let description=this.form.controls.description.value!;
    let price=this.form.controls.price.value!;

    let course:Course={
      id:0,
      name:name,
      description:description,
      level:level,
      price:price,
      duration:duration
    }

    this.service.createCourse(course).pipe(take(1)).subscribe({
      next: value => {
        this.router.navigate(['dashboard'])
      },
      error: err=>{console.log(err)}
    });
  }

}
