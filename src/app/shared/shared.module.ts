import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SingleSnippetComponent } from './components/single-snippet/single-snippet.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

const components = [
  PageNotFoundComponent,
  SingleSnippetComponent,
  SingleArticleComponent,
  ViewPostComponent,
];

@NgModule({
  declarations: [
    components,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
