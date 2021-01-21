import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { FormEmpleadoComponent } from './componentes/form-empleado/form-empleado.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadoComponent},
  {path: 'administrar', component: FormEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
