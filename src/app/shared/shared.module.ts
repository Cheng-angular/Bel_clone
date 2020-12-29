import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookBarComponent } from '../shared/book-bar/book-bar.component';



@NgModule({
  declarations: [
    BookBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookBarComponent
  ]
})
export class SharedModule { }
