import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

const components = [
  PageNotFoundComponent,
  QuillEditorComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
