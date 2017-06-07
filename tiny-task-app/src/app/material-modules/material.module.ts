import { NgModule } from '@angular/core';

import { MdButtonModule, MdSelectModule, MdMenuModule, MdProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    MdProgressBarModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    MdProgressBarModule,
    BrowserAnimationsModule 
  ],
  declarations: []
})
export class MaterialModule { }
