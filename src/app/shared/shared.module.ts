import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [ButtonComponent, InputComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
