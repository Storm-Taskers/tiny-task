import { NgModule } from '@angular/core';

import { MdButtonModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MdButtonModule,
    MdSelectModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MdButtonModule,
    MdSelectModule,
    BrowserAnimationsModule 
  ],
  declarations: []
})
export class MaterialModule { }
