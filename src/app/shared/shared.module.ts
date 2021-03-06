import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './components/single-post/single-post.component';

const components = [
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
    components,
    SinglePostComponent,
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
