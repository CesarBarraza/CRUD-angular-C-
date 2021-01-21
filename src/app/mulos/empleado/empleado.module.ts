import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListEmpleadosComponent } from 'src/app/componentes/list-empleados/list-empleados.component';
import { FormEmpleadoComponent } from 'src/app/componentes/form-empleado/form-empleado.component';
import { EmpleadoComponent } from 'src/app/componentes/empleado/empleado.component';
import { MenuComponent } from 'src/app/componentes/menu/menu.component';




@NgModule({
  declarations: [
    ListEmpleadosComponent,
    FormEmpleadoComponent,
    EmpleadoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListEmpleadosComponent,
    FormEmpleadoComponent,
    EmpleadoComponent,
    MenuComponent
  ]
})
export class EmpleadoModule { }
