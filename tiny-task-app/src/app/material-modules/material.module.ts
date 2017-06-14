import { NgModule } from '@angular/core';

import { MdButtonModule, MdSelectModule, MdMenuModule, MdProgressBarModule, MdSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    MdProgressBarModule,
    MdSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [ 
    MdButtonModule,
    MdSelectModule,
    MdMenuModule,
    MdProgressBarModule,
    MdSidenavModule,
    BrowserAnimationsModule 
  ],
  declarations: []
})
export class MaterialModule { }
