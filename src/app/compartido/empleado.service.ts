import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

   
   nuevoEmpleado= new Subject<any>()
   empleadoService!: Empleado;

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(environment.URL_API+'/empleado')
  }

  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete(environment.URL_API+'/empleado/'+id)
  }

  postEmpleado(emp: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(environment.URL_API+'/empleado', emp);
  }

  putEmpleado(emp: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(environment.URL_API+'/empleado/',emp);
  }

  selectEmpleado(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(environment.URL_API+'/empleado/'+id);
  }

  refreshList(): Observable<Empleado>{
    return this.nuevoEmpleado.asObservable();
  }

  filterEmpleado(filter: string){
    this.nuevoEmpleado.next(filter)
  }
}
