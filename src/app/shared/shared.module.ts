import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

const components = [
  ButtonComponent,
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
