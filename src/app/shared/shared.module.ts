import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ViewPostComponent } from './components/view-post/view-post.component';

const components = [
  PageNotFoundComponent,
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
