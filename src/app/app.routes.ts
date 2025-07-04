import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'courses', component:CoursesComponent},
    {path:'dashboard', component:AdminDashboardComponent},
    {path:'courseForm', component:CreateFormComponent},
];
