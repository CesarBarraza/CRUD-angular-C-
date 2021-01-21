import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/compartido/empleado.service';
import { Empleado } from 'src/app/modelos/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {


  constructor(private service: EmpleadoService) { }

  ngOnInit(): void {
  }

}
