import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import {ListboxModule} from 'primeng/listbox';
import {MenuModule} from 'primeng/menu';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {DividerModule} from 'primeng/divider';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:
  [
    ButtonModule,
    CardModule,
    ListboxModule,
    MenuModule,
    CheckboxModule,
    DropdownModule,
    DividerModule,
    SidebarModule
  ]
})
export class PrimeNGModule { }
