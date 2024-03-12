import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}
  ngOnInit (){}

  verdadero: boolean = true;
  articulos: any = ["libro", "computadora", "refreso"];

  title: string ='Mi nueva App!'
}
