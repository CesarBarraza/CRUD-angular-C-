import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/compartido/empleado.service';
import { Empleado } from 'src/app/modelos/empleado';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  formEmpleado!: FormGroup;
  empleados: Empleado[]=[]

  constructor(public servicio: EmpleadoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formEmpleado= this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      dni: ['', Validators.required]
    })

    this.inicializarForm();
  }

  agregarEmpleado(){
    if(this.formEmpleado.valid){
      if(this.servicio.empleadoService.id==0){
        this.servicio.postEmpleado(this.formEmpleado.value).subscribe(
          data=> {
         this.empleados.unshift(data);
         this.servicio.filterEmpleado('nuevo empleado');
         this.formEmpleado.reset(); 
        })
      }else{
        alert("Este empleado ya esxiste en la base de datos")
      }
    }else{
      alert("Todos los campos son obligatorios")
    }
  }

  editarEmpleado(){

        if(this.formEmpleado.get('id')==null){
          alert('No hay un elemento seleccionado para modificar')
        }else{
          this.servicio.putEmpleado(this.servicio.empleadoService).subscribe(
          data => {
          this.empleados.unshift(this.servicio.empleadoService);
          this.servicio.filterEmpleado('nuevo empleado');
          this.formEmpleado.reset();
        }
        )}
      }
  
  cancelar(){
    this.formEmpleado.reset();
  }

  inicializarForm(){
    this.servicio.empleadoService={
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      dni: 0,
    }
  }

}
