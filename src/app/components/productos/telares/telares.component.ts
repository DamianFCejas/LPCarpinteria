import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telares',
  templateUrl: './telares.component.html',
  styleUrls: ['./telares.component.css']
})
export class TelaresComponent implements OnInit {

  telarCuadrado:boolean=true;
  telarTriangular:boolean=true;
  telarAzteca:boolean=true;
  telar5Clavos:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  verCuadrados(){
    this.telarCuadrado=true;
    this.telarTriangular=false;
    this.telarAzteca=false;
    this.telar5Clavos=false;

  }

}
