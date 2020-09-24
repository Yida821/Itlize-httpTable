import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayPostComponent } from './display-post/display-post.component';

const routes: Routes = [{ path: 'posts', component: DisplayPostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [DisplayPostComponent];
