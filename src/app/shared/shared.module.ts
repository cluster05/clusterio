import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

const components = [
  PageNotFoundComponent,
];

@NgModule({
  declarations: [
    components
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
