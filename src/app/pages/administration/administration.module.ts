import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';

import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [UsersComponent, RolesComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
