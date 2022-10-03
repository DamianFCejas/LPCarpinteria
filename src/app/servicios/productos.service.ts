import { ReqResResponse, Producto } from './../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor( private http: HttpClient ) { }

  cargarProductos(){
    const url = 'assets/data/data.json';

    return this.http.get<ReqResResponse>( url )
                .pipe(
                  map (resp => {
                    return resp.data.map ( prod => Producto.productoDesdeJson(prod))
                  })
                )

  }

  

}
