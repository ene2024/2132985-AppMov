import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tareas/tareas';
import { ModalController } from '@ionic/angular';
import { TareasService } from '../Services/tareas.service';




@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private tareaserv: TareasService) { }

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  nuevaTarea: Tarea = {
    titulo: '',
    fechames: '',
    fechaanio: '',
    descripcion: ''
  } 

  sumbit(){
    console.log("Sumbit form");
    this.tareaserv.servagregartarea(this.nuevaTarea);
    this.modalCtrl.dismiss();
  }


}
