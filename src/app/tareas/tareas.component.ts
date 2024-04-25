import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { Tarea } from './tareas';
import { TareasService } from '../Services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {
  message = "";

  constructor(private modalCtrl: ModalController, private tareaserv: TareasService) { }

  ngOnInit() { 
    this.tareaserv.servgettarea;
  }

  tareaNueva: Tarea = {
    titulo: '',
    fechames: '',
    fechaanio: '',
    descripcion: ''
  } 

  tareas: Tarea[] = this.tareaserv.tareas;

  eliminartarea(id: number){
    this.tareaserv.serveliminartarea(id);
  }



  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarTareaComponent,
    });
    /*modal.onDidDismiss().then((dataReturned) => {
      this.tareaNueva=dataReturned.data;
      console.log(this.tareaNueva);
      this.tareaserv.servagregartarea(this.tareaNueva)
    });*/
    return await modal.present();
  }

}
