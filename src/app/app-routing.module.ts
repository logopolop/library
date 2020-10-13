import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [  
  //{ path: 'auth/signup', component: SignupComponent },
  //{ path: 'auth/signin', component: SigninComponent },
  { path: 'books', component: BookListComponent },
  //{ path: 'books/new', canActivate:[AuthGuardService], component: BookFormComponent },
  //{ path: 'books/view/:id', canActivate:[AuthGuardService], component: SingleBookComponent },
  { path:'', redirectTo:'books', pathMatch:'full' },
  { path:'**', redirectTo:'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
