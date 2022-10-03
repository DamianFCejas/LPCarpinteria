import { TodosProductosComponent } from './components/productos/todos-productos/todos-productos.component';
import { AgujasComponent } from './components/productos/agujas/agujas.component';
import { TelaresComponent } from './components/productos/telares/telares.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'nosotros',component: NosotrosComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'productos',component: ProductosComponent,
    /* children: [
      {path:'telares',component: TelaresComponent},
      {path:'agujas',component: AgujasComponent},
      {path:'todosProductos',component: TodosProductosComponent},
    ] */},
  {path:'inicio',component: InicioComponent},
  {path:'**',redirectTo:'inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
