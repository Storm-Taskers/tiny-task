import { NgModule } from '@angular/core';

import { MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MdButtonModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MdButtonModule,
    BrowserAnimationsModule 
  ],
  declarations: []
})
export class MaterialModule { }
