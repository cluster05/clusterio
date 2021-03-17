import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AuthComponent } from './components/auth/auth.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { TagsComponent } from './components/tags/tags.component';
import { ViewForTagComponent } from './components/tags/view-for-tag/view-for-tag.component';
import { UserComponent } from './components/user/user.component';
import { ViewCourseComponent } from './shared/components/view-course/view-course.component';
import { ViewPostComponent } from './shared/components/view-post/view-post.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: ClusterComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'courses/:courseId/lesson/:postId', component: ViewPostComponent },
      { path: 'courses/:courseId', component: ViewCourseComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'articles/:postId', component: ViewPostComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'snippets/:postId', component: ViewPostComponent },
      { path: 'snippets', component: SnippetsComponent },
      { path: 'tags/:tagName', component: ViewForTagComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'account', component: UserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterRoutingModule { }
