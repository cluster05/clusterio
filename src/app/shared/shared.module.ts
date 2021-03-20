import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { WordlimitPipe } from './pipe/wordlimit.pipe';
import { ViewTagsComponent } from './components/view-tags/view-tags.component';

const components = [
  WordlimitPipe,
  PageNotFoundComponent,
  ViewTagsComponent,
  QuillEditorComponent
];

@NgModule({
  declarations: [
    components,

  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,

  ],
  exports: [
    components
  ]
})
export class SharedModule { }
