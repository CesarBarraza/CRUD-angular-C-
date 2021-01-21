import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../compartido/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: Empleado[]=[];

  constructor(private svcEmpleado: EmpleadoService, private router: Router) {
    this.svcEmpleado.refreshList().subscribe((data:any) =>{
      this.listarEmpleados()
    })
   }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(){
    this.svcEmpleado.getEmpleados().subscribe(data =>{
      this.empleados = data;
    })
  }

  eliminarEmpleado(id: number){
    if(confirm("estas seguro de eliminar?")){
      this.svcEmpleado.deleteEmpleado(id).subscribe(
        data => this.listarEmpleados()
      )
    }
  }

  seleccionarEmpleado(emp: Empleado){
    this.svcEmpleado.empleadoService= Object.assign({}, emp)
  }
}
