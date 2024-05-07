import { Injectable } from '@angular/core';
import { Tarea } from '../tareas/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tarea []=[];
  

  constructor() { }

  servagregartarea(nuevatarea: Tarea){
    this.tareas.push(nuevatarea);
  }

  servgettarea(){
    return this.tareas;
  }

  servgetonetarea(id: any){
    return this.tareas[id];
  }

  serveliminartarea(id: number){
    this.tareas.splice(id,1);
  }
}
