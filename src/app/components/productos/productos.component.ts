import { Producto } from './../../models/producto';
import { ProductosService } from './../../servicios/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Producto[] = [];

  //activo:string="d-block";
  
 /*  telares=true;
  agujas:boolean=true;
  accesorios:boolean=true;
  infantil:boolean=true; */



  constructor( private productosService : ProductosService) { }

  ngOnInit(): void {

    this.productosService.cargarProductos()
        .subscribe( productos => {

          console.log(productos);
          this.productos = productos;
          
        });

  }

  /* verTelares(){
    this.accesorios=false;
    this.agujas=false;
    this.infantil=false;
    this.telares=true;
  }

  verAgujas(){
    this.telares=false;
    this.accesorios=false;
    this.infantil=false;
    this.agujas=true;
  }

  verAccesorios(){
    this.telares=false;
    this.agujas=false;
    this.infantil=false;
    this.accesorios=true;
  }

  verInfantil(){
    this.telares=false;
    this.accesorios=false;
    this.agujas=false;
    this.infantil=true;
  }

  verTodos(){
    this.telares=true;
    this.accesorios=true;
    this.agujas=true;
    this.infantil=true;
  } */

}
