import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { JoinComponent } from './join/join.component';


const routes: Routes = [
  {path:'user',component : UserComponent},
  {path:'join', component: JoinComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
