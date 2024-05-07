import { Component, OnInit } from '@angular/core';
import { TareasService } from '../Services/tareas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.scss'],
})
export class TareaDetalleComponent  implements OnInit {

  constructor(private ruta : ActivatedRoute, private consulta : TareasService) { }

  ngOnInit() {
    
  }

  idTarea: string = this.ruta.snapshot.params['id'];


  tarea = this.consulta.servgetonetarea(this.idTarea);

  imgurl="https://i.pinimg.com/originals/ca/90/bc/ca90bcdf6b53cff26964976530bb878c.jpg";
}
