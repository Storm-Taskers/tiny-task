import { NgModule } from '@angular/core';

import { MdButtonModule, MdSelectModule, MdMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    BrowserAnimationsModule 
  ],
  declarations: []
})
export class MaterialModule { }
